import React from 'react';

const CheckButton = (props) => {
  const onUpdateCurrentTextAnswer = (e) => {
    props.updateCurrentTextAnswer(e.target.value);
  };

  const onClick = () => {
    props.checkAnswer();
  }

  return (
    <div>
      <input type="text" onChange={onUpdateCurrentTextAnswer} value={props.currentTextAnswer} />
      <button onClick={onClick}>Проверить</button>
    </div>
  )
}

export default CheckButton;