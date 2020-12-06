import vocabulary from './vocabulary';

const UPDATE_CURRENT_TEXT_ANSWERE = 'UPDATE-CURRENT-TEXT-ANSWERE';

const initialState = {
  items: vocabulary,
  currentTextAnswer: '',
};

const vocabularyReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE-CURRENT-TEXT-ANSWERE':
      state.currentTextAnswer = action.text;
      return state;
    default:
      return state;
  }
}

export const shuffleVocabulary = (vocabulary) => {
  const shuffledArray = vocabulary;

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

export const updateCurrentTextAnswerCreator = (text) => {
  return {
    type: UPDATE_CURRENT_TEXT_ANSWERE,
    text,
  }
}

export default vocabularyReducer;