import React, { Component } from 'react'
import './Component.css';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            loginStatus: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }


    handleSubmit = (event) => {

        console.log(this.state);

        try {

            fetch("http://localhost:3001/api/login", {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }).then(response => response.json())
                .then((data) => {

                    if (data.errors) {
                        this.setState({
                            loginStatus: data.errors[0].msg
                        })
                    }

                    else if (!data.message) {
                        sessionStorage.setItem("accessToken", data.token)

                        this.setState({
                            loginStatus: "Logged in"
                        })
                    }

                    else {
                        this.setState({
                            loginStatus: data.message
                        })
                    }


                    console.log(data)
                });

        } catch (e) {
            console.log(e)
        }


        this.setState({
            name: "",
            email: "",
            password: "",
            loginStatus: ""
        })
        event.preventDefault()

    }


    render() {

        return (
            <div class="container">

                <form onSubmit={this.handleSubmit}>

                    <h1>Login</h1>
                    <label>Email</label> <input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="Email" required /><br />
                    <label>Password</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" required /><br />

                    <input class="submitbtn" type="submit" value="Login" />
                </form>

                <p>{this.state.loginStatus}</p>

            </div>

        )
    }
}


export default Login