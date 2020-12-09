import React from 'react';
import CheckAnswer from '../CheckAnswer/CheckAnswer';
import FinalResults from '../FinalResults/FinalResults';
import classes from './ExerciseWrap.module.css';
import CorrectAnswerResult from '../CorrectAnswerResult/CorrectAnswerResult';
import WrongAnswerResult from '../WrongAnswerResult/WrongAnswerResult';

const ExerciseWrap = (props) => {
  const displayComponent = () => {
    if (props.showResults) return <FinalResults correctAnswers={props.correctAnswers}
      wrongAnswers={props.wrongAnswers}
      totalItems={props.totalItems}
      restart={props.restart} />

    if (!props.statusAnswer) return <CheckAnswer check={props.check}
      currentTextAnswer={props.currentTextAnswer}
      updateCurrentTextAnswer={props.updateCurrentTextAnswer}
      task={props.vocabulary[props.vocabulary.length - 1].rusVersion} />

    if (props.statusAnswer) {
      const item = props.vocabulary[props.vocabulary.length - 1];

      switch (props.statusAnswer) {
        case 'Успех':
          return <CorrectAnswerResult next={props.next}
            task={item.rusVersion}
            correctAnswer={item.engVersion} />
        case 'Неудача':
          return <WrongAnswerResult next={props.next}
            answer={props.currentTextAnswer}
            task={item.rusVersion}
            correctAnswer={item.engVersion}
            comment={item.comment} />
        default:
          return 'No result';
      }
    }
  }

  return (
    <div className={classes.exerciseWrap}>
      <div className={classes.counter}>{props.completedItems}/{props.totalItems}</div>
      {displayComponent()}
    </div>
  )
}

export default ExerciseWrap;