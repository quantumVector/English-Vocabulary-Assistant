import React from 'react';
import { connect } from 'react-redux';
import {
  updateCurrentTextAnswer,
  checkAnswer,
  nextExercise,
  restart
} from '../../redux/vocabularyReducer';
import ExerciseWrap from './ExerciseWrap';
import CheckAnswer from '../CheckAnswer/CheckAnswer';
import FinalResults from '../FinalResults/FinalResults';
import CorrectAnswerResult from '../CorrectAnswerResult/CorrectAnswerResult';
import WrongAnswerResult from '../WrongAnswerResult/WrongAnswerResult';

class ExerciseWrapContainer extends React.Component {
  onUpdateCurrentTextAnswer = (e) => {
    this.props.updateCurrentTextAnswer(e.target.value);
  };

  onKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    this.props.checkAnswer();
  }

  onCheckAnswer = () => {
    this.props.checkAnswer();
  }

  onNextExercise = () => {
    this.props.nextExercise();
  };

  onRestart = () => {
    this.props.restart();
  }

  displayComponents = () => {
    if (this.props.showResults) return <FinalResults correctAnswers={this.props.correctAnswers}
      wrongAnswers={this.props.wrongAnswers}
      totalItems={this.props.totalItems}
      restart={this.props.restart}
      onRestart={this.onRestart} />

    if (!this.props.statusAnswer) return <CheckAnswer check={this.props.check}
      currentTextAnswer={this.props.currentTextAnswer}
      onUpdateCurrentTextAnswer={this.onUpdateCurrentTextAnswer}
      onKeyDown={this.onKeyDown}
      onCheckAnswer={this.onCheckAnswer}
      task={this.props.vocabulary[this.props.vocabulary.length - 1].rusVersion} />

    if (this.props.statusAnswer) {
      const item = this.props.vocabulary[this.props.vocabulary.length - 1];

      switch (this.props.statusAnswer) {
        case 'Успех':
          return <CorrectAnswerResult next={this.props.next}
            task={item.rusVersion}
            correctAnswer={item.engVersion}
            onNextExercise={this.onNextExercise} />
        case 'Неудача':
          return <WrongAnswerResult next={this.props.next}
            answer={this.props.currentTextAnswer}
            task={item.rusVersion}
            correctAnswer={item.engVersion}
            comment={item.comment}
            onNextExercise={this.onNextExercise} />
        default:
          return 'No result';
      }
    }
  }

  render = () => {
    return <ExerciseWrap completedItems={this.props.completedItems}
      totalItems={this.props.totalItems}
      displayComponents={this.displayComponents} />
  }
}

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

export default connect(mapStateToProps, {
  updateCurrentTextAnswer,
  checkAnswer,
  nextExercise,
  restart
})(ExerciseWrapContainer);