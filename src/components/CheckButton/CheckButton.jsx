import React from 'react';
import PurposeTranslation from '../PurposeTranslation/PurposeTranslation';
import classes from './CheckButton.module.css';

const CheckButton = (props) => {
  const onUpdateCurrentTextAnswer = (e) => {
    props.updateCurrentTextAnswer(e.target.value);
  };

  const onClick = () => {
    props.checkAnswer();
  }

  const onKeyDown = (e) => {
    if (e.key !== 'Enter') return;

    props.checkAnswer();
  }

  return (
    <div className={classes.answerBox}>
      <PurposeTranslation vocabulary={props.vocabulary} />
      <input type="text" className={classes.textAnswer} onChange={onUpdateCurrentTextAnswer}
        onKeyDown={onKeyDown}
        value={props.currentTextAnswer} autoFocus />
      <button className={classes.btn} onClick={onClick}>Проверить</button>
    </div>
  )
}

export default CheckButton;