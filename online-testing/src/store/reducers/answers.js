import { actionType } from "../action/type"

const initialState = {
    danhSachDapAn: [],
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.CHECK_QUESTION:
            state.danhSachDapAn =
            {
                ...state.danhSachDapAn,
                [action.payload.questionId]: action.payload,
            }
            return { ...state };
        default: return state;
    }
}

export default reducer