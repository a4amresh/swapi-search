import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notifications from './common/notifications';
import Login from './components/Login';
import Search from './components/Search';
import PrivateRoute from './common/PrivateRoute';
import Navbar from './common/Navbar';


const Layout = ({ children }) => (
    <>
        <div className="wrapper">
            <Navbar />
            <main className="main-content">
                {children}
            </main>
        </div>
    </>
);

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Notifications />
            <Switch>
                <Route path="/login" exact component={Login} />
                <Layout>
                    <PrivateRoute path="/" exact component={Search} />
                </Layout>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoutes;