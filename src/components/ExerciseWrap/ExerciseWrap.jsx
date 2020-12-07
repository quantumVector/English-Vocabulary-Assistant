import React from 'react';
import CheckButton from '../CheckButton/CheckButton';
import FinalResults from '../FinalResults/FinalResults';
import ResultInfo from '../ResultInfo/ResultInfo';
import classes from './ExerciseWrap.module.css';

const ExerciseWrap = (props) => {
  const displayComponent = () => {
    if (props.showResults) return <FinalResults correctAnswers={props.correctAnswers}
      wrongAnswers={props.wrongAnswers} totalItems={props.totalItems} />

    if (!props.statusAnswer) return <CheckButton checkAnswer={props.checkAnswer}
      updateCurrentTextAnswer={props.updateCurrentTextAnswer}
      vocabulary={props.vocabulary} />

    if (props.statusAnswer) return <ResultInfo reuslt={props.statusAnswer}
      item={props.vocabulary[props.vocabulary.length - 1]}
      next={props.next}
      vocabulary={props.vocabulary} />
  }

  return (
    <div className={classes.exerciseWrap}>
      {displayComponent()}
    </div>
  )
}

export default ExerciseWrap;