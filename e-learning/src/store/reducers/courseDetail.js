import { actionType } from "../actions/type";
//! nếu để null thì khi Bóc thuộc tính phải để
// const {nguoiTao} = this.props.courseDetail || {}
const initialState = {
    courseDetail: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_INFO:
            state.courseDetail = [action.payload];
            return { ...state };
        default: return state;
    }
}

export default reducer;