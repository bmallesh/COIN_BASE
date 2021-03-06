import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import { Button } from 'reactstrap';
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'
import forgot from './components/forgotPassword'
import resetPassword from './components/resetPassword'
import Pricing from './components/pricing'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/coinbase/api/getUserDetails').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        {/* <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {this.state.loggedIn &&
          <p className="join">Join the party, {this.state.username}!</p>
        } */}
        {/* Routes to different components */}
        <Route
          exact path="/"
          render={() =>
          <Home/>} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
        <Route
          exact path="/forgot"
          component={forgot} />
        <Route
          exact path="/resetpwd"
          component={resetPassword} />
        <Route
          exact path="/pricing"
          component={Pricing} />
      </div>
    );
  }
}

export default App;
