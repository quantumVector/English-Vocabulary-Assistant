import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentTextAnswerCreator, checkAnswerCreator, nextCreator } from '../../redux/vocabularyReducer';
import ExerciseWrap from './ExerciseWrap';

const mapStateToProps = (state) => {
  return {
    vocabulary: state.vocabulary.shuffledItems,
    currentTextAnswer: state.vocabulary.currentTextAnswer,
    statusAnswer: state.vocabulary.statusAnswer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentTextAnswer: (text) => {
      dispatch(updateCurrentTextAnswerCreator(text));
    },
    checkAnswer: () => {
      dispatch(checkAnswerCreator());
    },
    next: () => {
      dispatch(nextCreator());
    }
  }
}


const ExerciseWrapContainer = connect(mapStateToProps, mapDispatchToProps)(ExerciseWrap);

export default ExerciseWrapContainer;