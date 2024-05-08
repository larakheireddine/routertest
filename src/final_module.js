//Here is the code for my final project! I did basically everything through the module and started by 
// importing the needed dependencies such as all of the react elements and react-router-dom

import './App.css';
import * as React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

var totalwork = ['Full Extension Curl', 'Scissor Kicks', 'Mountain Climbers', 'Plank', 'Plank Hip Dips', 'Push Ups', 'Decline Push Ups','Side Plank w/ Arm Extension', 'Inchworm', 'Arm Circles', 'Squat', 'Single-Leg Glute Bridge' ,'Single-Leg Romanian Deadlift','Lunge', 'Wall Sit'];

//My first function is for my home page.

function MyFitness() {

  const [value, setValue] = React.useState(null);

  const abs_list = ['Full Extension Curl', 'Scissor Kicks', 'Mountain Climbers', 'Plank', 'Plank Hip Dips'];
  const myAbs = (<ol>{abs_list.map((item, i) => <li key={item + i}>{item}</li>)}</ol>);

  const arms_list = ['Push Ups', 'Decline Push Ups','Side Plank w/ Arm Extension', 'Inchworm', 'Arm Circles'];
  const myArms = (<ol>{arms_list.map((item, i) => <li key={item + i}>{item}</li>)}</ol>);

  const legs_list = ['Squat', 'Single-Leg Glute Bridge' ,'Single-Leg Romanian Deadlift','Lunge', 'Wall Sit'];
  const myLegs = (<ol>{legs_list.map((item, i) => <li key={item + i}>{item}</li>)}</ol>);

  const [message, setMessage] = React.useState(' ');
  const [workouts, setWorkouts] = React.useState(' ');

  const [first, setFirst] = React.useState(' ');
  const [last, setLast] = React.useState(' ');

  const handleFirst = (e) => {setFirst(e.target.value)}
  const handleLast = (e) => {setLast(e.target.value)}

  totalwork = [...abs_list, ...arms_list, ...legs_list];

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === 'Abs') {
      setMessage('Below you can find a list of workouts for the selected target area. We will be doing 30 second intervals for each workout listed below, with a rest time between the two sets. This workout is designed for approximately five minutes.');
      setWorkouts(myAbs);
    }
    else if (e.target.value === 'Arms'){
      setMessage('Below you can find a list of workouts for the selected target area. We will start the workout with 18 reps of both push ups and finish with 30 second intervals of the remaining workouts, with a rest time between the two sets. This workout is designed for approximately five minutes.');
      setWorkouts(myArms);
    }
    else if (e.target.value === 'Legs'){
      setMessage('Below you can find a list of workouts for the selected target area. We will be doing 30 reps of each workout until we reach the wall sits, where we will do a 45 second interval, with a rest time between the two sets. This workout is designed for under ten minutes.');
      setWorkouts(myLegs);
    }
    else {
      setMessage("Ready to get your fitness on?")
    }
  }

  const handleReset = () => {
    setValue('nothing');
    setFirst(' ');
    setMessage(' ');
    setWorkouts(' ');
  } 

  return (
    <div className='fit'>
      <div className='fit-form'>
        <h1>IGNITE</h1>
        <p>To start your fitness journey, let's first decide what part of the body you <br />want to work on! Enter your name and select the target muscle group.</p>
        <label>First Name: <input type='text' value={first} onChange={handleFirst}></input></label>
        <label>Last Name: <input type='text' value={last} onChange={handleLast}></input></label>

        <label>Target Muscle Options:
          <select value={value} onChange={handleChange}>
            <option value="nothing">Select an Option</option> 
            <option value='Abs'>Abs</option>
            <option value='Arms'>Arms</option>
            <option value='Legs'>Legs</option>
          </select>
        </label>
        <div>
          <button onClick={handleReset}>Reset Information?</button>
        </div>
      </div>

      <div className='fit-mess'>
        <h2>Alright {first} {last}, let's get to work on {value}...</h2>
        <p>{message}</p>
        {workouts}
      </div>
    </div>
  );
}

function FullWork(props) {
  const [reason, setReason] = React.useState(true);
  React.useEffect(() => {
    window.localStorage.setItem('reason_work', JSON.stringify(reason))}, [reason])

  const total = props.totalwork;
  const myWork = (<ol>{total.map((item, i) => <li key={item + i}>{item}</li>)}</ol>);

  return (
    <div className='fullwork'>
      <h1>IGNITE</h1>
      {reason && (
        <div className='reason'>
          <h4>Why is movement important?</h4>
          <p>Many people who work eight hour days, seven days a week, spend much of their time sitting down, even after work due to mental/physical fatigue. As important as it is to relax, it is  
          equally <br /> import to get up and move the body. Some benefiting factors are a sharper mind, increase in energy throughout the day, consistent and better sleep, and a natural mood booster.</p>
          <button onClick={() => setReason(false)}>Hide</button>
        </div>
      )}
      <p>If you are looking for more, below you can find a list of our complete workout plan that covers the Abs, Arms, and Legs muscle groups!</p>
      {myWork}
    </div>
  );
}

export function MyFinal() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MyFitness />}/>
        <Route path="/full" element={<FullWork totalwork={totalwork}/>}/>
      </Routes>
    </Router>
  );
}
