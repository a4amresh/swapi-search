import { notificationConstants } from './../constants';
const initialState = {
    alerts: []
}
const notification = (state = initialState, action) => {
    switch (action.type) {
        case notificationConstants.SUCCESS:
            const al = [...state.alerts]
            al.push({
                type: 'success',
                message: action.payload
            })
            return { ...state, alerts: al };
        case notificationConstants.ERROR:
            let alerts = [...state.alerts]
            alerts.push({
                type: 'danger',
                message: action.payload
            })
            return { ...state, alerts }
        case notificationConstants.CLEAR:
            let alert = [...state.alerts]
            alert.splice(0, 1)
            return { ...state, alerts: alert };
        default:
            return state
    }
}
export default notification;
