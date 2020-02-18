import { notificationConstants as alertConstants } from '../constants';

const success = (payload) => {
    return dispatch => {
        dispatch({ type: alertConstants.SUCCESS, payload })
        setTimeout(() => {
            dispatch({ type: alertConstants.CLEAR })
        }, 5000)
    }
}
const error = (payload) => {
    return dispatch => {
        dispatch({ type: alertConstants.ERROR, payload })
        setTimeout(() => {
            dispatch({ type: alertConstants.CLEAR })
        }, 5000)
    }
}

const clear = () => {
    return { type: alertConstants.CLEAR };
}

export const notificationActions = {
    success,
    error,
    clear
};