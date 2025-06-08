import React, { useState } from "react"
import './style.css'

const ToggleContent = ({ label, children }) => {
    const [isVisible, setVisible] = useState(false)

    const toggleVisibility = () => setVisible(!isVisible)

    return (
        <div>
            <button
                onClick={ toggleVisibility }
                className='toggle-content-button'
            >{ label }</button>
            <div
                className='toggle-content-block'
                style={{ display: isVisible ? 'block' : 'none' }}
            >
                { children }
            </div>A
        </div>
    )
}

export default ToggleContent