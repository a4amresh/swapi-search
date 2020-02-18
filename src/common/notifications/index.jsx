import React from 'react';
import { connect } from 'react-redux';
import './notifications.scss';

const Notifications = (props) => {
    return (
        <div className="notifications">
            {props.alerts.map((notification, idx) => (
                <div key={idx} className={`alert alert-${notification.type}`}>
                    {notification.message}
                </div>
            ))}
        </div>
    )
}
function mapState(state) {
    const alerts = state.notification.alerts;
    return { alerts };
}
export default connect(mapState, null)(Notifications);