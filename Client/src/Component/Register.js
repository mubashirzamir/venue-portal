import React, { Component } from 'react'
//import './Component.css';

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

                <div className="py-4">

                    <form onSubmit={this.handleSubmit}>

                        <h1>Register</h1>
                        <div class="row mb-3">
                            <label for="inputText3" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputText3" value={this.state.name} onChange={this.namehandler} required />
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" value={this.state.email} onChange={this.emailhandler} required />
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword3" value={this.state.password} onChange={this.passwordhandler} required />
                            </div>
                        </div>

                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Register</button>
                        </div>

                    </form>

                    <p className="lead">{this.state.registerStatus}</p>

                </div>

            </div>

        )
    }
}

export default Register