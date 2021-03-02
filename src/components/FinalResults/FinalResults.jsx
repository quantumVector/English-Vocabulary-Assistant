import React from 'react';
import classes from './FinalResults.module.css';

const FinalResults = (props) => {
  const percent = Math.floor(props.correctAnswers * 100 / props.totalItems);

  return (
    <div className={classes.resultsBox}>
      <div className={classes.title}>Окончательный результат</div>
      <div>Правильных ответов: {props.correctAnswers}</div>
      <div>Неверных ответов: {props.wrongAnswers}</div>
      <div className={classes.percent}>{percent}% верных ответов</div>
      <button className={classes.btn} onClick={props.onRestart}>Повторить</button>
    </div>
  )
}

export default FinalResults;