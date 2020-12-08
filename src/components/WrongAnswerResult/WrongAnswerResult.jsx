import React from 'react';
import PurposeTranslation from '../PurposeTranslation/PurposeTranslation';
import classes from './WrongAnswerResult.module.css';

const WrongAnswerResult = (props) => {
  const onClick = () => {
    props.next();
  };

  return (
    <div>
      <PurposeTranslation task={props.task} />
      <div className={classes.result} >
        <div className={classes.title}>Неверно!</div>
        <div className={classes.label}>Ваш ответ:</div>
        <div className={classes.answer}>{props.answer}</div>
        <div>Правильный ответ:</div>
        <div className={classes.correctAnswer}>{props.correctAnswer}</div>
      </div>
      <div className={classes.сomment}>{props.comment}</div>
      <button className={classes.btn} onClick={onClick}>Дальше</button>
    </div>
  )
}

export default WrongAnswerResult;