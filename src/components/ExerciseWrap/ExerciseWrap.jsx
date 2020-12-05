import React from 'react';
import classes from './ExerciseWrap.module.css';

const ExerciseWrap = () => {
  return (
    <div className={classes.exerciseWrap}>
      <div className={classes.word}>Test word</div>
      <input type="text"/>
      <button>Проверить</button>
    </div>
  )
}

export default ExerciseWrap;