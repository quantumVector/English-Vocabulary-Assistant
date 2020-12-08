import React from 'react';
import CheckButton from '../CheckButton/CheckButton';
import FinalResults from '../FinalResults/FinalResults';
import ResultInfo from '../ResultInfo/ResultInfo';
import classes from './ExerciseWrap.module.css';

const ExerciseWrap = (props) => {
  const displayComponent = () => {
    if (props.showResults) return <FinalResults correctAnswers={props.correctAnswers}
      wrongAnswers={props.wrongAnswers}
      totalItems={props.totalItems}
      restart={props.restart} />

    if (!props.statusAnswer) return <CheckButton checkAnswer={props.checkAnswer}
      currentTextAnswer={props.currentTextAnswer}
      updateCurrentTextAnswer={props.updateCurrentTextAnswer}
      task={props.vocabulary[props.vocabulary.length - 1].rusVersion} />

    if (props.statusAnswer) return <ResultInfo currentTextAnswer={props.currentTextAnswer}
      reuslt={props.statusAnswer}
      item={props.vocabulary[props.vocabulary.length - 1]}
      next={props.next}
      task={props.vocabulary[props.vocabulary.length - 1].rusVersion}
      comment={props.vocabulary[props.vocabulary.length - 1].comment} />
  }

  return (
    <div className={classes.exerciseWrap}>
      <div className={classes.counter}>{props.completedItems}/{props.totalItems}</div>
      {displayComponent()}
    </div>
  )
}

export default ExerciseWrap;