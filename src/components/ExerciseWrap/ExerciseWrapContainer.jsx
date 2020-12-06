import React from 'react';
import { connect } from 'react-redux';
import { shuffleVocabulary, updateCurrentTextAnswerCreator } from '../../redux/vocabularyReducer';
import ExerciseWrap from './ExerciseWrap';

const mapStateToProps = (state) => {
  return {
    vocabulary: shuffleVocabulary(state.vocabulary.items),
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