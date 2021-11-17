import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link class="navbar-brand" to="/">
                    Venue Portal
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item">
                            <NavLink className="nav-link" aria-current="page" exact to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" exact to="/about">
                                About
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" exact to="/register">
                                Register
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" exact to="/login">
                                Login
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/getUser">
                                Get User
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <Link className="btn btn-outline-light" to="/venue/add">Add Venue</Link>

            </div>
        </nav>
    );
};

export default Navbar;
