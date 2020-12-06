import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentTextAnswerCreator } from '../../redux/vocabularyReducer';
import ExerciseWrap from './ExerciseWrap';

const mapStateToProps = (state) => {
  return {
    vocabulary: state.vocabulary.shuffledVocabulary,
    currentTextAnswer: state.vocabulary.currentTextAnswer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentTextAnswer: (text) => {
      dispatch(updateCurrentTextAnswerCreator(text));
    }
  }
}


const ExerciseWrapContainer = connect(mapStateToProps, mapDispatchToProps)(ExerciseWrap);

export default ExerciseWrapContainer;