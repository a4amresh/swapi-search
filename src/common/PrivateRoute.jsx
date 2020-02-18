import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            rest.auth && rest.auth.loggedIn
                ? <Component {...props} />
                : <Redirect to='/login' />
        )} />
    )
}

function mapState(state) {
    const { auth } = state;
    return { auth };
}
export default connect(mapState, {})(PrivateRoute);