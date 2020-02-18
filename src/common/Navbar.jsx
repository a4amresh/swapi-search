import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './../store/actions/user.action';
import "./navbar.scss";

const Navbar = (props) => {
    return (
        <nav className="main-navbar navbar navbar-expand navbar-light">
            <Link to="/" className="navbar-brand text-primary">SWAPI</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <button onClick={(e) => props.logout()} className="nav-link btn btn-link">Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const actionCreators = {
    logout: userActions.logout
};

export default connect(null, actionCreators)(Navbar);