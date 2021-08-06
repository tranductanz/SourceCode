var productList = [];
var cart = [];
var fetchData = () => {
  // var newProduct = new Product(
  //      id,
  //      name,
  //      price,
  //      screen,
  //      backCamera,
  //      frontCamera,
  //      img,
  //      desc,
  //      type,
  //      image,
  //      inventory,
  //      rating
  // );
  axios({
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products",
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      productList = res.data;
      showTable();
      countCart();
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
                         <button class="btn btn-primary" onclick ="addToCart('${data[i].id}');">Thêm vào giỏ hàng</button>
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



// var mapData = (data) => {
//   var mappedData = [];

//   for (var i = 0; i < data.length; i++) {
//     var mappedProduct = new Product(
//       data[i].id,
//       data[i].name,
//       data[i].price,
//       data[i].screen,
//       data[i].backCamera,
//       data[i].frontCamera,
//       data[i].img,
//       data[i].desc,
//       data[i].type,
//       data[i].image,
//       data[i].inventory,
//       data[i].rating
//     );
//     mappedData.push(mappedProduct);
//   }
//   return mappedData;
// };
var countCart = () =>{
     var count = 0;
          for (var i = 0; i < cart.length; i++){
          count += cart[i].quantity;
          document.querySelector("#countCart").innerHTML = ` Có <span>(${count}) </span> Sản phẩm`;
     }
     
     if (count === 0){
          document.querySelector("#countCart").innerHTML = "";
     }  
}
var payCart = () =>{
     
     

     if(cart.length <= 0){
          alert("Giỏ hàng rỗng");
     }
     else{
          cart.splice(0, cart.length);
     alert("Thanh toán thành công");
     }

     showCart();
     saveData();
     countCart();
     fetchCart();
     fetchData();

}
var showCart = () => {
     
  var content = "";
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    var total = cart[i].product.price * cart[i].quantity;
    content += `<tr>
                         <td >
                              <img src="${cart[i].product.img}"/>
                         </td>
                         <td>${cart[i].product.name}</td>
                         <td>${cart[i].product.price}</td>
                         <td>${cart[i].quantity}
                              <button onclick="minusProduct('${cart[i].product.id}');"class="btn btn-primary">-</button>
                              <button onclick="plusProduct('${cart[i].product.id}');" class="btn btn-primary">+</button> 
                         </td>

                         <td>${total}
                              <button onclick ="removeCart('${cart[i].product.id}');" class="btn btn-danger">X</button>
                         </td>
                    </tr>`
                    sum+= total;
               }
  
  document.querySelector("#tbodyCart").innerHTML = content;
  document.querySelector("#sum").innerHTML = "Thành tiền" + " "  +sum +" VNĐ";
};

var searchProduct = () =>{
     var content = "";
     var foundProduct = [];
     var keyword = document.querySelector("#txtSearch").value;
     for(var i = 0; i < productList.length; i++){
          if (productList[i].id === keyword){
                    foundProduct.push(productList[i]);
               }
          else if (productList[i].name.toLowerCase().includes(keyword.toLowerCase())) {
               foundProduct.push(productList[i]);
          }

          
     }
     showTable(foundProduct);
}


var addToCart = (id) => {
  // for (var i = 0 ; i< productList.length; i++){
  //      var productBuy = {
  //           product : productList[i],
  //           quantity: 1,
  //      };
  //           if (productList[i].id === id){
  //           cart.push(productBuy);
  //           showCart();
  //           alert("Thành công");
  //      }
  // }
  // var index = findIndexApi(id);
  // if(productList[index]){
  //      productList[index].quantity++;
  // }
  // saveData();
var indexProduct = findIndexById(id);
var cartIndex = cart.findIndex((itemBought) => {
     return itemBought.product.id === id;
     });
var productBought = { 
     product: productList[indexProduct], 
     quantity: 1 
};
     // console.log(cartIndex);

     if (cartIndex === -1) {
          cart.push(productBought);
          alert("Thêm sản phẩm thành công");
          } else {
               cart[cartIndex].quantity++;
               alert("Thêm sản phẩm thành công");
              
          }
     showCart();
     countCart();
     saveData();
};

//tìm Id index của sản phẩm
var findIndexById = (id) => {
     for (var i = 0; i < productList.length; i++) {
          if (productList[i].id === id) {
          return i;
     }
}
return -1;
};

//Tanng giam san pham
var plusProduct = (id) =>{
     var cartIndex = cart.findIndex((itemBought) => {
          return itemBought.product.id === id;
          });

     if (cartIndex !== -1){
          cart[cartIndex].quantity++;
     }
     showCart();
     countCart();
     saveData();
}

var minusProduct = (id) =>{
     var cartIndex = cart.findIndex((itemBought) => {
          return itemBought.product.id === id;
          });
               cart[cartIndex].quantity--;
          if(cart[cartIndex].quantity === 0){
               cart.splice(cartIndex, 1);
          }
          
     showCart();
     countCart();
     saveData();
     
};

//Xoá sản phẩm
var removeCart = (id) => {

var cartIndex = cart.findIndex((itemBought) => {
     return itemBought.product.id === id;
     });

     // console.log(cartIndex);
cart.splice(cartIndex, 1);
     
     showCart();
     saveData();
     countCart();
};

//Lưu sản phẩm vào Local Storage
var saveData = () => {
  localStorage.setItem("products", JSON.stringify(cart));
};

var fetchCart = () => {
  var productJSON = localStorage.getItem("products");

  if (productJSON) {
    cart = JSON.parse(productJSON);
    showCart();
  }
};
fetchCart();
