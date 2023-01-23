import "./App.css";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import { INCREMENT, DECREMENT, COUNTDOWN , RESET, CREATELAP, REMOVELAP } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
function App() {
  let [timer , setTimer] = useState(0)
  let [timeString ,setTimeString] = useState('00:00:00')
  const state = useSelector((state) => state);
  const dispatch = useDispatch(); 
  const increaseTime = () => {
    dispatch({ type: INCREMENT }); 
  };
  const startTimer = () => {
    if ( timer === 0 && state.tmr.seconds > 0) {
     let t = setInterval(countDown,1000);
     setTimer(t)
     }
     else if( state.tmr.seconds <= 0){
      alert('Time should be positive')
     }
     else{
      alert('Already Started!!')
     }
  }; 
  const countDown = () => {
    dispatch({ type: COUNTDOWN });
    if (state.tmr.seconds === 0) {
      clearInterval(timer);
    }
  };
  const stopTimer = () => {
    clearInterval(timer);
    setTimer(0)
   };
  const createLap = () => {
    if(timer !==0 )
    dispatch({type:CREATELAP , payload: timeString})
    else{
      alert('First start CountDown!!')
    }
  };
  const resetTimer = () => {
    dispatch({type:RESET})
    clearInterval(timer)
  };
  const decreaseTime = () => { 
    if(state.tmr.seconds-60 >= 0)
    dispatch({ type: DECREMENT }); 
    else{
      dispatch({type:RESET})
      clearInterval(timer)
      setTimer(0)
    }
  };
  const removeLap=(index)=>{ 
    dispatch({type:REMOVELAP , payload: index})
  }
  useEffect(() => { 
   let hours = Math.floor(state.tmr.seconds / 3600);
   let minutes = Math.floor((state.tmr.seconds - (hours * 3600)) / 60);
   let seconds = state.tmr.seconds - (hours * 3600) - (minutes * 60); 
   let t = hours.toString().padStart(2, '0') + ':' +
        minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0');
        setTimeString(t)
  }, [state.tmr])
  
  return (
    <div className="container">
      <div className="heading-container">
        <h1>Redux Timer</h1>
        <h1 className="time-heading">{timeString}</h1>
      </div>
      <div className="button-container">
        <Button onclicked={increaseTime}>+</Button>
        <Button onclicked={startTimer}>Start</Button>
        <Button onclicked={stopTimer}>Stop</Button>
        <Button onclicked={createLap}>Lap</Button>
        <Button onclicked={resetTimer}>Reset</Button>
        <Button onclicked={decreaseTime}>-</Button>
      </div>
      <div className="laps-cotainer">
          {
            state.lps.laps.map((lap , index) => <label onClick={()=>removeLap(index)} key={index} htmlFor=""> {lap} </label> )
          } 
      </div>
    </div>
  );
}

export default App;
