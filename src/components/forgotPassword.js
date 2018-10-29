import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, FormGroup, Label, Input
} from 'reactstrap';
import axios from 'axios'

class forgot extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    forgotpasswordValidate() {
        let usernameError = '';

        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.username)) {

            usernameError = "Enter valid Email"
        }

        if (usernameError) {
            this.setState({ usernameError })
            return false;
        }
        else {
            this.setState({ usernameError: '' })
        }

        return true;
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
        const isValid = this.forgotpasswordValidate()

        if (isValid) {
            axios
                .post('user/forgot', {
                    username: this.state.username,
                })
                .then(response => {
                    console.log('mail sended ')
                    console.log(response)
                    if(response.data.status=="success"){
                        this.setState({
                            redirectTo:'/login'
                        })
                    }
                }).catch(error => {
                    console.log('email error: ')
                    console.log(error);

                })

        }


    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <Container>
                    <Row className="pt-5">
                        <Col sm="12" md="4"></Col>
                        <Col sm="12" md="4">
                            <div className="pt-4 rounded" style={{ color: "black", backgroundColor: "white" }}>
                                <h4>Forgot Your Password?</h4>
                                <form className="form-horizontal">
                                    <FormGroup className="mx-4">
                                        <Label for="exampleEmail" className="pr-2">Email</Label>
                                        <Input
                                            className="form-input"
                                            type="text"
                                            id="username"
                                            name="username"
                                            placeholder="Enter Email"
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                    <div style={{ fontSize: 15, color: "red" }}>{this.state.usernameError}</div>
                                    <div className="form-group ">
                                        <button
                                            className="button"
                                            onClick={this.handleSubmit}
                                            type="submit">Reset Password</button>
                                    </div>
                                </form>

                            </div>

                        </Col>
                        <Col sm="12" md="4"></Col>
                    </Row>
                </Container>

            )
        }
    }
}

export default forgot
