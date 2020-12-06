import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentTextAnswerCreator, checkAnswerCreator } from '../../redux/vocabularyReducer';
import ExerciseWrap from './ExerciseWrap';

const mapStateToProps = (state) => {
  return {
    vocabulary: state.vocabulary.shuffledItems,
    currentTextAnswer: state.vocabulary.currentTextAnswer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentTextAnswer: (text) => {
      dispatch(updateCurrentTextAnswerCreator(text));
    },
    checkAnswer: () => {
      dispatch(checkAnswerCreator());
    }
  }
}


const ExerciseWrapContainer = connect(mapStateToProps, mapDispatchToProps)(ExerciseWrap);

export default ExerciseWrapContainer;