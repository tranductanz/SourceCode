//khai báo giá trị ban đầu reducer quản lý
const initialState = {
    categoryList: [
        { tabName: 'tabTopClothes', showName: 'Áo', type: 'topclothes' },
        { tabName: 'tabBotClothes', showName: 'Quần', type: 'botclothes' },
        { tabName: 'tabShoes', showName: 'Giày dép', type: 'shoes' },
        { tabName: 'tabHandBags', showName: 'Túi xách', type: 'handbags' },
        { tabName: 'tabNecklaces', showName: 'Dây chuyền', type: 'necklaces' },
        // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
        { tabName: 'tabHairStyle', showName: 'Kiểu tóc', type: 'hairstyle' },
        { tabName: 'tabBackground', showName: 'Nền', type: 'background' }
    ],
    selectedCategory: "topclothes",
};


//khởi tạo reducer : reducer là 1 function, có 2 tham số là
// state(giá trị đang quản lý), và action (yêu cầu từ component)
// nhiệm vụ của reducer : nhận actions, chỉnh sửa state theo action
//! return state mới sau khi chỉnh sửa

//redux dùng shallow comparation : so sánh nông
const reducer = (state = initialState, action) => {
    //chỉnh sửa state theo action
    // return state; bước đầu khi chưa có action
    //switch case
    switch (action.type) {
        case "SET_SELECTED_CATEGORY":
            state.selectedCategory = action.payload
            //trả về 1 bản copy
            return { ...state };
        default:
            return state;
    }
}

export default reducer;