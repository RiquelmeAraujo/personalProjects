import React from 'react';
import TimeByUser from './TimeByUser';

const UserChoiceTimes = ({times, handleTimeDeletion, handleTimeClick}) => {
    return ( 
        <>
            {
                times.map ((time) => (
                    <TimeByUser
                        key = {time.id}
                        time = {time}  
                        handleTimeDeletion={handleTimeDeletion}  
                        handleTimeClick={handleTimeClick}
                    />
                ))
            }
        </>
     );
}
 
export default UserChoiceTimes;