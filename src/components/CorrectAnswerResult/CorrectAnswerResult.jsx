import React from 'react';
import TranslationPurpose from '../TranslationPurpose/TranslationPurpose';
import classes from './CorrectAnswerResult.module.css';

const CorrectAnswerResult = (props) => {
  return (
    <div>
      <TranslationPurpose task={props.task} />
      <div className={classes.result}>
        <div className={classes.title}>Правильно!</div>
        <div className={classes.correctAnswer}>{props.correctAnswer}</div>
        <button className={classes.btn} onClick={props.onNextExercise}>Дальше</button>
      </div>
    </div>
  )
}

export default CorrectAnswerResult;