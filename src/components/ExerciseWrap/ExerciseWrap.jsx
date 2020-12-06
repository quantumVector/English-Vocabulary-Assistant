import React from 'react';
import classes from './ExerciseWrap.module.css';

const ExerciseWrap = (props) => {
  const onUpdateCurrentTextAnswer = (e) => {
    props.updateCurrentTextAnswer(e.target.value);
  };

  return (
    <div className={classes.exerciseWrap}>
      <div className={classes.word}>{props.vocabulary[props.vocabulary.length - 1].rusVersion}</div>
      <input type="text" onChange={onUpdateCurrentTextAnswer} value={props.currentTextAnswer}/>
      <button>Проверить</button>
    </div>
  )
}

export default ExerciseWrap;