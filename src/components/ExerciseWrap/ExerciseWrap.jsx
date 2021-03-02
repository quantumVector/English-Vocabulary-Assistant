import React from 'react';
import classes from './ExerciseWrap.module.css';

const ExerciseWrap = (props) => {
  return (
    <div className={classes.exerciseWrap}>
      <div className={classes.counter}>{props.completedItems}/{props.totalItems}</div>
      {props.displayComponents()}
    </div>
  )
}

export default ExerciseWrap;