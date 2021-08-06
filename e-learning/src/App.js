import React, { Component } from 'react';
import Detail from './view/Detail';
import Home from './view/Home';
import Signin from './view/Signin';
import Signup from './view/Signup';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//npm i react-router-dom --save
//dùng để link 4 components lớn
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/detail" component={Detail} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;