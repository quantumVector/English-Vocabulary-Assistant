import React from 'react';
import CorrectAnswerResult from '../CorrectAnswerResult/CorrectAnswerResult';
import WrongAnswerResult from '../WrongAnswerResult/WrongAnswerResult';

const ResultInfo = (props) => {
  const displayAnswerResult = () => {
    if (props.reuslt === 'Успех') return <CorrectAnswerResult next={props.next}
      task={props.task}
      correctAnswer={props.item.engVersion} />;
    if (props.reuslt === 'Неудача') return <WrongAnswerResult next={props.next}
      task={props.task}
      answer={props.currentTextAnswer}
      correctAnswer={props.item.engVersion}
      comment={props.comment} />;
  }

  return <div>{displayAnswerResult()}</div>
}

export default ResultInfo;