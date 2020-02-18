import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './../../store/actions/user.action';
import './login.scss';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            formValid: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => {
            if (this.state.username && this.state.password) {
                this.setState({
                    formValid: true
                })
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }
    render() {
        const { loggingIn, loggedIn } = this.props;
        const { username, password, formValid } = this.state;
        if (loggedIn) {
            return (<Redirect push={false} to="/" />)
        }
        return (
            <>
                <div className="wrapper container h-100">
                    <div className="row align-items-center justify-content-center h-100">
                        <div className="col-10 col-md-4 login-form pt-3">
                            <h1 className="h3 text-center mb-4 text-primary">SWAPI</h1>
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="h6 text-center text-black-50">Sign in to Admin</h2>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="UserName">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="material-icons">account_box</i>
                                                    </div>
                                                </div>
                                                <input type="text" name="username" id="UserName" className="form-control" value={username} onChange={this.handleChange} placeholder="Enter your username" required />
                                                <div className="valid-feedback">You are authorize</div>
                                                <div className="invalid-feedback">You are not authorize</div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Password">Password</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="material-icons">lock</i>
                                                    </div>
                                                </div>
                                                <input type="password" name="password" id="Password" className="form-control" value={password} onChange={this.handleChange} placeholder="Enter your password" required />
                                                <div className="valid-feedback">Password matched! Go head</div>
                                                <div className="invalid-feedback">Password Not match</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 text-right">
                                                <button className="btn btn-primary btn-block" disabled={loggingIn || !formValid}>{loggingIn ? "Loging..." : "Login"}</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function mapState(state) {
    const { loggingIn, loggedIn } = state.auth;
    return { loggingIn, loggedIn };
}

const actionCreators = {
    login: userActions.login
};

export default connect(mapState, actionCreators)(Login);