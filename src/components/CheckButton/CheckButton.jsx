import React from 'react';
import classes from './CheckButton.module.css';

const CheckButton = (props) => {
  const onUpdateCurrentTextAnswer = (e) => {
    props.updateCurrentTextAnswer(e.target.value);
  };

  const onClick = () => {
    props.checkAnswer();
  }

  return (
    <div className={classes.answerBox}>
      <input type="text" className={classes.textAnswer} onChange={onUpdateCurrentTextAnswer}
        value={props.currentTextAnswer} />
      <button className={classes.btn} onClick={onClick}>Проверить</button>
    </div>
  )
}

export default CheckButton;