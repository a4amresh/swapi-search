import { userConstants } from './../constants/user.constants';
import { userService } from './../../services/user.service';
import { notificationActions } from './notification.action';

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(user => {
                dispatch(success(user));
                console.log(user)
                console.log("Logged in success")
            }).catch(error => {
                console.error(error)
                dispatch(failure(error.toString()));
                // notificationActions
                dispatch(notificationActions.error(error.toString()));
                // console.log(error);
            })
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

export const userActions = {
    login,
    logout
};