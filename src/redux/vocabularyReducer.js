//import vocabulary from './vocabulary';
import vocabulary from './vocabularyShort';

const UPDATE_CURRENT_TEXT_ANSWERE = 'UPDATE-CURRENT-TEXT-ANSWERE';
const CHECK_ANSWER = 'CHECK-ANSWER';
const NEXT = 'NEXT';
const RESTART = 'RESTART';

const shuffleVocabulary = (vocabulary) => {
  const shuffledArray = vocabulary;

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
      }
      return stateCopy;
    case 'NEXT':
      stateCopy.shuffledItems.splice(-1, 1);

      if (stateCopy.shuffledItems.length) {
        stateCopy.currentTextAnswer = '';
        stateCopy.statusAnswer = false;
      } else {
        stateCopy.showResults = true;
      }

      return stateCopy
    case 'RESTART':
      stateCopy.shuffledItems = shuffleVocabulary(stateCopy.items);
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

export const updateCurrentTextAnswerCreator = (text) => {
  return {
    type: UPDATE_CURRENT_TEXT_ANSWERE,
    text,
  }
}

export const checkCreator = () => {
  return {
    type: CHECK_ANSWER,
  }
}

export const nextCreator = () => {
  return {
    type: NEXT,
  }
}

export const restartCreator = () => {
  return {
    type: RESTART,
  }
}

export default vocabularyReducer;