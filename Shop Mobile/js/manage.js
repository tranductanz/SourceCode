var productList = [];
var cart = [];
var fetchData = () => {
  axios({
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products",
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      productList = res.data;
      showTable();
      console.log(productList);
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchData();
var showTable = (data) => {
  if (!data) {
    data = productList;
  }
  var content = "";

  for (var i = 0; i < data.length; i++) {
    content += `<div class="content">
                         <img src="${data[i].img}"/>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis ut nulla aspernatur repellendus praesentium? Distinctio quis a autem voluptate.</p>
                         <button class="btn btn-danger" onclick ="deleteProduct('${data[i].id}');">Delete</button>
                         <button onclick="getProductToUpdate('${data[i].id}');" class="btn btn-primary">Get Info</button>
                    </div>`;
  }
  document.querySelector("#productList").innerHTML = content;
};

var filterProduct = () => {
  var foundProduct = [];
  var filter = document.querySelector("#productChoose").value;

  if (filter !== "all") {
    for (var i = 0; i < productList.length; i++) {
      if (productList[i].type === filter) foundProduct.push(productList[i]);
      showTable(foundProduct);
    }
  } else {
    showTable();
  }
};

var addProduct = () =>{
     var id = document.querySelector("#txtId").value;
     var name = document.querySelector("#txtName").value;
     var price = document.querySelector("#txtPrice").value;
     var screen = document.querySelector("#txtScreen").value;
     var backCamera = document.querySelector("#txtBackCamera").value;
     var frontCamera = document.querySelector("#txtFrontCamera").value;
     var img = document.querySelector("#txtImg").value;
     var desc = document.querySelector("#txtDesc").value;
     var type = document.querySelector("#txtType").value;
     
     var newProduct = new Product(
          id,
          name,
          price,
          screen,
          backCamera,
          frontCamera,
          img,
          desc,
          type,
     );   

          if(!validateForm()){
               return;
          }
          else {
               axios({
                    url : "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products",
                    method: "POST",
                    data: newProduct,
               })
               .then((res) => {
                    
                    console.log(res);
                    alert("Thêm Sản phẩm Mới Thành Công Trên Website");
                    fetchData();
                    document.querySelector("#btnReset").click();
                    document.querySelector("#nameError").innerHTML ="";

          
          })
          .catch((err) =>{
               console.log(err);
          });
          }
               
          

     

};

var getProductToUpdate = (id) =>{
     axios({
          url : `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products/${id}`,
          method : "GET",
          params : {
               id : id,
          }
     })
     .then((res) =>{
          console.log(res.data);
     document.querySelector("#txtId").setAttribute("disabled", true);
     document.querySelector("#txtId").style.color = "red";
     document.querySelector("#txtId").value = res.data.id;
     document.querySelector("#txtName").value = res.data.name;
     document.querySelector("#txtPrice").value = res.data.price;
     document.querySelector("#txtScreen").value = res.data.screen;
     document.querySelector("#txtBackCamera").value = res.data.backCamera;
     document.querySelector("#txtFrontCamera").value = res.data.frontCamera;
     document.querySelector("#txtImg").value = res.data.img;
     document.querySelector("#txtDesc").value = res.data.desc;
     document.querySelector("#txtType").value = res.data.type;
     
     
     })
     .catch((err) =>{
          console.log(err);
     })
}
var updateProduct = (id) =>{
     var id = document.querySelector("#txtId").value;
     var name = document.querySelector("#txtName").value;
     var price = document.querySelector("#txtPrice").value;
     var screen = document.querySelector("#txtScreen").value;
     var backCamera = document.querySelector("#txtBackCamera").value;
     var frontCamera = document.querySelector("#txtFrontCamera").value;
     var img = document.querySelector("#txtImg").value;
     var desc = document.querySelector("#txtDesc").value;
     var type = document.querySelector("#txtType").value;

     var updateNew = new Product(
          id,
          name,
          price,
          screen,
          backCamera,
          frontCamera,
          img,
          desc,
          type,
     );
     axios({
          url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products/${id}`,
          method : "PUT",
          params : {
               id : id,
          },
          data: updateNew,
     })
     .then((res) =>{
          console.log(res);
          
          alert("Cập nhật dữ liệu thành công");
          document.querySelector("#btnReset").click();
          document.querySelector("#txtId").removeAttribute("disabled", true);
          fetchData();
          location.reload();
     })
     .catch((err) =>{
          console.log(err);
     });

} 



var deleteProduct = (id) =>{
     axios({
          url : `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products/${id}`,
          method : "DELETE",
          params : {
               id : id,
          }
     })
     .then((res) =>{
          console.log(res);
          document.querySelector("#btnReset").click();
          fetchData();
     })
     .catch((err) =>{
          console.log(err);
     });
}

var saveData = () => {
  localStorage.setItem("products", JSON.stringify(cart));
};

var validateForm = () =>{
     var id = document.querySelector("#txtId").value;
     var name = document.querySelector("#txtName").value;
     var price = document.querySelector("#txtPrice").value;
     var screen = document.querySelector("#txtScreen").value;
     var backCamera = document.querySelector("#txtBackCamera").value;
     var frontCamera = document.querySelector("#txtFrontCamera").value;
     var img = document.querySelector("#txtImg").value;
     var desc = document.querySelector("#txtDesc").value;
     var type = document.querySelector("#txtType").value;

     var isValid = true;

     isValid &= checkText(name, "#nameError");
     
     isValid &= checkText(id, "#idError");
     isValid &= checkText(price, "#priceError") && checkNum(price, "#priceError");
     isValid &= checkText(screen, "#screenError");
     isValid &= checkText(backCamera, "#backError");
     isValid &= checkText(frontCamera, "#frontError");
     isValid &= checkText(img, "#imgError");
     isValid &= checkText(desc, "#descError");
     isValid &= checkText(type, "#typeError") && checkRequired(type, "#typeError");
     return isValid;



};

var checkNum = (value, errorId) =>{
     pattern = /[^\d+$]/g
     if (!pattern.test(value)){
          document.querySelector(errorId).innerHTML = ""
          return true;
     }
     document.querySelector(errorId).innerHTML = "chỉ được nhập số";
     return false;
}
var checkRequired = (value, errorId) =>{
     if (value === "samsung" || value === "iphone"){
          document.querySelector(errorId).innerHTML = "";
          return true;
     }
     document.querySelector(errorId).innerHTML = "samsung or iphone thôi nhé";
}
var checkText = (value, errorId) =>{

     if(value.length > 0){
          document.querySelector(errorId).innerHTML = ""
          return true;
     }
     document.querySelector(errorId).innerHTML = "Không được để trống";
     return false;
};