import React, { Component } from 'react';
import Detail from './view/Detail';
import Home from './view/Home';
import Signin from './view/Signin';
import Signup from './view/Signup';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMe } from './store/actions/auth';
import { AuthRoute, PrivateRoute } from './HOCs/Route';
//npm i react-router-dom --save
//dùng để link 4 components lớn
class App extends Component {
  render() {
    return (
      //todo GIỚI THIỆU GUARD, 1 MẠNG BẢO MẬT LINK
      <BrowserRouter>
        {/* Nếu không muốn trang nào cũng có Header */}
        {/* thì bỏ Header vào tưng cái component */}
        <Switch>
          {/* //! TRUYỀN thêm id vào detail */}
          <Route path="/detail/:id" component={Detail} />
          <PrivateRoute exact path="/" component={Home} redirectPath="/signin" />
          {/* //todo GUARD */}

          <AuthRoute path="/signin" component={Signin} redirectPath="/" />
          <AuthRoute path="/signup" component={Signup} redirectPath="/" />

          {/* path rỗng (HOME) phải để cuối cùng */}
          {/* nếu muốn đưa lên đầu, phải có thuộc tính "exact(true)"" */}

        </Switch>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    const token = localStorage.getItem("t");
    if (token) {
      //! đưa actions fetchMe lên store
      this.props.dispatch(fetchMe);
    }
  }
}

export default connect()(App);