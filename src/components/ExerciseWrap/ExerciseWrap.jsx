import React from 'react';
import CheckButton from '../CheckButton/CheckButton';
import ResultInfo from '../ResultInfo/ResultInfo';
import classes from './ExerciseWrap.module.css';

const ExerciseWrap = (props) => {
  const displayComponent = () => {
    console.log(props)
    if (!props.statusAnswer) return <CheckButton checkAnswer={props.checkAnswer}
      updateCurrentTextAnswer={props.updateCurrentTextAnswer} />
    if (props.statusAnswer) return <ResultInfo reuslt={props.statusAnswer}
      item={props.vocabulary[props.vocabulary.length - 1]}
      next={props.next} />
  }

  return (
    <div className={classes.exerciseWrap}>
      <div className={classes.word}>{props.vocabulary[props.vocabulary.length - 1].rusVersion}</div>
      { displayComponent()}
    </div>
  )
}

export default ExerciseWrap;