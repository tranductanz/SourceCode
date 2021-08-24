import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import course from './reducers/course';
import thunk from 'redux-thunk';
import courseDetail from './reducers/courseDetail'
import me from './reducers/me';
//! muốn xài middle-ware thì npm i redux-thunk
//! sau đó import "thunk" và applyMiddleWare
const reducer = combineReducers({
    //khai báo reducer con
    course,
    courseDetail,
    me,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//! vừa sử dụng được check Redux,
//! vừa sử dụng được middleware
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);


export default store;