import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
    
    const capitalize = (s) => {
        if (typeof s !== 'string') 
            return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    return (
        <div style={{height: '50px'}}>
            {
            props.alert && 
            <div className={`container alert alert-${props.alert.msgType} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.msgType)}</strong>: {props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            }
        </div>
    )
}

Alert.proptype = {
    alert: PropTypes.object.isRequired
}
