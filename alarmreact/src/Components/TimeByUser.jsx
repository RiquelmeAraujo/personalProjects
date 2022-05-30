import React from 'react';
import {CgClose, CgInfo} from "react-icons/cg"

import "./TimeByUser.css"


const TimeByUser = ({time, handleTimeDeletion, handleTimeClick}) => {
    return ( 
        <div 
        className='time-container'
        style={time.ative ? {borderLeft: '6px solid green'} : {borderLeft: '6px solid red'}}
        >
            <div 
            className='time-title'
            onClick={() => handleTimeClick(time.id)}
            >
                {time.time}
            </div>
            <div>
                <button 
                className='remove-task-button'
                onClick={() => handleTimeDeletion(time.id)}
                >
                    <CgClose />
                </button>
            </div>
        </div>
     );
}
 
export default TimeByUser;