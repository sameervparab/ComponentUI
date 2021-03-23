import React from 'react'
import './SnackBarSuccess.css'

const SnackBarSuccess = () => {
    return (
        <div className="snackBarSuccess">
            <i className="fa fa-check-circle-o check" aria-hidden="true" ></i>
            <span> Building is terminate from S2 Capacity Augmentation</span>
            <i className="fa fa-times close" aria-hidden="true"></i>


        </div>
    )
}

export default SnackBarSuccess
