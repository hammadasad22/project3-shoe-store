import React from 'react'
import {Outlet} from 'react-router-dom'

function Launch() {
    return (
        <div>
            Launch
            <Outlet />
        </div>
    )
}

export default Launch
