import { actionType } from "../action/type";

const initialState = {
    questionList: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_QUESTION:
            state.questionList = action.payload;
            return { ...state };
        default: return state
    }
}

export default reducer;