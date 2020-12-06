import React from 'react';
import classes from './ExerciseWrap.module.css';

const ExerciseWrap = (props) => {
  console.log(props.vocabulary);
  return (
    <div className={classes.exerciseWrap}>
      <div className={classes.word}>{props.vocabulary[props.vocabulary.length - 1].rusVersion}</div>
      <input type="text"/>
      <button>Проверить</button>
    </div>
  )
}

export default ExerciseWrap;