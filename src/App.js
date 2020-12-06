import React from 'react';
import './App.css';
import ExerciseWrap from './components/ExerciseWrap/ExerciseWrap';

function App(props) {
  return (
    <div className="app-wrapper">
      <ExerciseWrap store={props.store} />
    </div>
  );
}

export default App;
