import React from 'react';
import TranslationPurpose from '../TranslationPurpose/TranslationPurpose';
import classes from './CheckAnswer.module.css';

const CheckAnswer = (props) => {
  return (
    <div className={classes.answerBox}>
      <TranslationPurpose task={props.task} />
      <input type="text" className={classes.textAnswer} onChange={props.onUpdateCurrentTextAnswer}
        onKeyDown={props.onKeyDown}
        value={props.currentTextAnswer} autoFocus />
      <button className={classes.btn} onClick={props.onCheckAnswer}>Проверить</button>
    </div>
  )
}

export default CheckAnswer;