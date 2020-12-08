import React from 'react';
import PurposeTranslation from '../PurposeTranslation/PurposeTranslation';
import classes from './CorrectAnswerResult.module.css';

const CorrectAnswerResult = (props) => {
  const onClick = () => {
    props.next();
  };

  return (
    <div>
      <PurposeTranslation task={props.task} />
      <div className={classes.result}>
        <div className={classes.title}>Правильно!</div>
        <div className={classes.correctAnswer}>{props.correctAnswer}</div>
        <button className={classes.btn} onClick={onClick}>Дальше</button>
      </div>
    </div>
  )
}

export default CorrectAnswerResult;