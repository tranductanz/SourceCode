//! chứa dữ liệu liên quan tới profile cá nhân
// vì "me" chỉ quản lý duy nhất 1 thông tin

import { actionType } from "../actions/type";

// không cần phải object
const initialState = null;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_ME:
            state = action.payload;
            return { ...state };
        default:
            return state;
    }
}

export default reducer;