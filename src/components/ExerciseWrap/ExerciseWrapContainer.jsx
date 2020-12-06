import { connect } from 'react-redux';
import ExerciseWrap from './ExerciseWrap';

const mapStateToProps = (state) => {
  return {
    vocabulary: state.vocabulary,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {}
}


const ExerciseWrapContainer = connect(mapStateToProps, mapDispatchToProps)(ExerciseWrap);

export default ExerciseWrapContainer;