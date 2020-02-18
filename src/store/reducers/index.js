import { combineReducers } from 'redux';
import auth from './auth.reducers';
import notification from './notification.reducer';

export default combineReducers({
    auth,
    notification
});