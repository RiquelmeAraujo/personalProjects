import React, {useState, useEffect} from 'react';

import AddTime from './Components/AddTime';

import {v4 as uuidv4} from 'uuid'

import './App.css'
import UserChoiceTimes from './Components/UserChoiceTimes';



const App = () => {
  
  const [times, setTimes] = useState([
    {
    id: '1',
    time: 0,
    ative: false,
  },
  {
    id: '2',
    time: 0,
    ative: true,
  },
]);


  const date = new Date();
  const [dataTime, setDataTime] = useState ({
   hour: date.getHours(),
   minutes: date.getMinutes(),
   seconds: date.getSeconds()
  });

  useEffect(() => {

const timer = setInterval(() =>{
          
          const date = new Date();
          let hour = date.getHours();
          let min = date.getMinutes();
          let seg = date.getSeconds();
          
          min = Number(leftZero(min))
          seg = Number(leftZero(seg))


          setDataTime({
              hour: hour,
              minutes: min,
              seconds: seg,
          })
      }, 1000)
      return () => clearInterval(timer);
  }, [])
  

  const leftZero = (x) => {
      if (x < 10) {
          x = '0' + x;
      } return x;
  }

  const ComparisionTime = (currenttime) => {
    const timeComparision = times.time
    
    if(timeComparision === currenttime){
      handleTimeClick(times.id)
    }
  
  }

  const handleTimeAddition = (time) => {
     const newTimes = [...times, {
       time: time,
       id: uuidv4(),
       ative: true,
     }]

     setTimes(newTimes)
  }



const handleTimeDeletion = (timeId) => {
  const newTime = times.filter(times => times.id !== timeId)

  setTimes(newTime)

};

const handleTimeClick = (timeId) => {
  const newTime = times.map((time) =>{
    if (time.id === timeId) return {...time, ative: !time.ative}
    
    return time;
  });

  setTimes(newTime);

};

    return ( 
      
        <div className='container'>
            <div className='header-container'>
            <h1>{dataTime.hour}:{dataTime.minutes}:{dataTime.seconds}</h1> </div>
            <AddTime 
            handleTimeAddition={handleTimeAddition}
            ComparisionTime={ComparisionTime}
            />
            <UserChoiceTimes 
              times={times}
              handleTimeDeletion={handleTimeDeletion}
              handleTimeClick={handleTimeClick}
            />
        </div>
    );
}
 
export default App;