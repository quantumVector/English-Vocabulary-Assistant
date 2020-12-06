import React from 'react';
import { connect } from 'react-redux';
import { shuffleVocabulary } from '../../redux/vocabularyReducer';
import ExerciseWrap from './ExerciseWrap';

const mapStateToProps = (state) => {
  return {
    vocabulary: shuffleVocabulary(state.vocabulary),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {}
}


const ExerciseWrapContainer = connect(mapStateToProps, mapDispatchToProps)(ExerciseWrap);

export default ExerciseWrapContainer;