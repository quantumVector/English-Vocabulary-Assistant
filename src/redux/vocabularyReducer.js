import vocabulary from './vocabulary';

const UPDATE_CURRENT_TEXT_ANSWERE = 'UPDATE-CURRENT-TEXT-ANSWERE';
const CHECK_ANSWER = 'CHECK-ANSWER';

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
      if (stateCopy.shuffledItems[stateCopy.shuffledItems.length - 1]
        .engVersion === stateCopy.currentTextAnswer) {
          stateCopy.shuffledItems.splice(-1, 1);
          stateCopy.currentTextAnswer = '';
      }
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

export const checkAnswerCreator = () => {
  return {
    type: CHECK_ANSWER,
  }
}

export default vocabularyReducer;