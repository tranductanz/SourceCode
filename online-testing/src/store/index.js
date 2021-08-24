import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import question from './reducers/question';
import answers from './reducers/answers';
const rootReducer = combineReducers({
    // khai báo store con
    question,
    answers,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
)

export default store;