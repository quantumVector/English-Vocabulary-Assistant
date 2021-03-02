import React from 'react';
import { connect } from 'react-redux';
import {
  updateCurrentTextAnswerCreator, checkCreator,
  nextCreator, restartCreator
} from '../../redux/vocabularyReducer';
import ExerciseWrap from './ExerciseWrap';

const mapStateToProps = (state) => {
  return {
    vocabulary: state.vocabulary.shuffledItems,
    currentTextAnswer: state.vocabulary.currentTextAnswer,
    statusAnswer: state.vocabulary.statusAnswer,
    showResults: state.vocabulary.showResults,
    correctAnswers: state.vocabulary.correctAnswers,
    wrongAnswers: state.vocabulary.wrongAnswers,
    totalItems: state.vocabulary.totalItems,
    completedItems: state.vocabulary.completedItems,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentTextAnswer: (text) => {
      dispatch(updateCurrentTextAnswerCreator(text));
    },
    check: () => {
      dispatch(checkCreator());
    },
    next: () => {
      dispatch(nextCreator());
    },
    restart: () => {
      dispatch(restartCreator());
    }
  }
}

const ExerciseWrapContainer = connect(mapStateToProps, mapDispatchToProps)(ExerciseWrap);

export default ExerciseWrapContainer;