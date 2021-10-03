import React, { Component } from 'react'
import './Component.css';

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",
            registerStatus: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    namehandler = (event) => {
        this.setState({
            name: event.target.value
        })
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

            fetch("http://localhost:3001/api/register", {
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
                            registerStatus: data.errors[0].msg
                        })
                    }

                    else {
                        this.setState({
                            registerStatus: data.message
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
            registerStatus: ""
        })
        event.preventDefault()

    }




    render() {
        return (
            <div class="container">

                <form onSubmit={this.handleSubmit}>

                    <h1>Register</h1>
                    <label>Name</label> <input type="text" value={this.state.name} onChange={this.namehandler} placeholder="Name" required /><br />
                    <label>Email</label> <input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="Email" required /><br />
                    <label>Password</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" required /><br />

                    <input class="submitbtn" type="submit" value="Register" />
                </form>

                <p>{this.state.registerStatus}</p>

            </div>

        )
    }
}

export default Register