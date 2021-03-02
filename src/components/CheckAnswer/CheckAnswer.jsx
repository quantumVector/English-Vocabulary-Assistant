import React from 'react';
import TranslationPurpose from '../TranslationPurpose/TranslationPurpose';
import classes from './CheckAnswer.module.css';

const CheckAnswer = (props) => {
  const onUpdateCurrentTextAnswer = (e) => {
    props.updateCurrentTextAnswer(e.target.value);
  };

  const onClick = () => {
    props.check();
  }

  const onKeyDown = (e) => {
    if (e.key !== 'Enter') return;

    props.check();
  }

  return (
    <div className={classes.answerBox}>
      <TranslationPurpose task={props.task} />
      <input type="text" className={classes.textAnswer} onChange={onUpdateCurrentTextAnswer}
        onKeyDown={onKeyDown}
        value={props.currentTextAnswer} autoFocus />
      <button className={classes.btn} onClick={onClick}>Проверить</button>
    </div>
  )
}

export default CheckAnswer;