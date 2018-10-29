import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link,img } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <div>
                <header className="navbar App-header" id="nav-container">
                    <div className="col-6 text-left">
                        {/* <img src={require('./img/coinbase-logo.png')} alt="" title="" class="logoheight" /> */}

                        <Link to="/" className="btn btn-link text-secondary">
                            <span className="text-white"><h3><strong>HOME</strong></h3></span>
                        </Link>
                    </div>
                    <div className="col-6" >
                        {loggedIn ? (
                            <section className="navbar-section pull-right">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">Logout</span></Link>

                            </section>
                        ) : (
                                <section className="navbar-section pull-right">
                                    <Link to="/login" className="btn btn-link text-white">
                                        <span className="text-white">Login</span>
                                    </Link>
                                    <Link to="/signup" className="btn btn-link">
                                        <span className="text-white">Sign up</span>
                                    </Link>
                                </section>
                            )}
                    </div>

                </header>
            </div>

        );

    }
}

export default Navbar