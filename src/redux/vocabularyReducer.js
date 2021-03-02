//import vocabulary from './vocabulary';
import vocabulary from './vocabularyShort';

const UPDATE_CURRENT_TEXT_ANSWERE = 'UPDATE-CURRENT-TEXT-ANSWERE';
const CHECK_ANSWER = 'CHECK-ANSWER';
const NEXT_EXERCISE = 'NEXT-EXERCISE';
const RESTART = 'RESTART';

const shuffleVocabulary = (items = vocabulary) => {
  const shuffledArray = items;

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

const initialState = {
  items: vocabulary,
  shuffledItems: shuffleVocabulary(vocabulary),
  currentTextAnswer: '',
  statusAnswer: false,
  correctAnswers: 0,
  wrongAnswers: 0,
  showResults: false,
  totalItems: vocabulary.length,
  completedItems: 0,
  repository: [],
};

const vocabularyReducer = (state = initialState, action) => {
  const stateCopy = {
    ...state,
    shuffledItems: [...state.shuffledItems],
  }

  switch (action.type) {
    case 'UPDATE-CURRENT-TEXT-ANSWERE':
      stateCopy.currentTextAnswer = action.text;
      return stateCopy;
    case 'CHECK-ANSWER':
      const item = stateCopy.shuffledItems[stateCopy.shuffledItems.length - 1]
        .engVersion.replace('.', '');
      let answer = stateCopy.currentTextAnswer.replace('.', '').trim();
      const regexp = new RegExp(`${item}`, 'i');

      if (regexp.test(answer) && item.length === answer.length) {
        stateCopy.statusAnswer = 'Успех';
        stateCopy.correctAnswers += 1;
        stateCopy.completedItems += 1;
      } else {
        stateCopy.statusAnswer = 'Неудача';
        stateCopy.wrongAnswers += 1;
        stateCopy.completedItems += 1;
        stateCopy.repository.push(stateCopy.shuffledItems[stateCopy.shuffledItems.length - 1]);
      }
      return stateCopy;
    case 'NEXT-EXERCISE':
      stateCopy.shuffledItems.splice(-1, 1);

      if (stateCopy.shuffledItems.length) {
        stateCopy.currentTextAnswer = '';
        stateCopy.statusAnswer = false;
      } else {
        stateCopy.showResults = true;
      }

      return stateCopy
    case 'RESTART':
      if (stateCopy.repository.length) {
        stateCopy.shuffledItems = shuffleVocabulary(stateCopy.repository);
        stateCopy.totalItems = stateCopy.repository.length;
        stateCopy.repository = [];
      } else {
        stateCopy.shuffledItems = shuffleVocabulary(stateCopy.items);
        stateCopy.totalItems = stateCopy.items.length;
      }
      stateCopy.currentTextAnswer = '';
      stateCopy.correctAnswers = 0;
      stateCopy.wrongAnswers = 0;
      stateCopy.completedItems = 0;
      stateCopy.statusAnswer = false;
      stateCopy.showResults = false;
      return stateCopy;
    default:
      return state;
  }
}

export const updateCurrentTextAnswer = (text) => {
  return {
    type: UPDATE_CURRENT_TEXT_ANSWERE,
    text,
  }
}

export const checkAnswer = () => {
  return {
    type: CHECK_ANSWER,
  }
}

export const nextExercise = () => {
  return {
    type: NEXT_EXERCISE,
  }
}

export const restart = () => {
  return {
    type: RESTART,
  }
}

export default vocabularyReducer;