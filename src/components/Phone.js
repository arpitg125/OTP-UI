import React from 'react'
import './Veri.css'
const Phone = (props) => {
    return (props.trigger) ? (
        <div className="pop">
            <div className="pop-inner">
            <button className="close-btn" onClick={()=>props.setTrigger(false)}>X</button>
            { props.children }
            </div>
        </div>
    ) : "";
}

export default Phone
