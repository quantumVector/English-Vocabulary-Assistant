import vocabulary from './vocabulary';

const initialState = vocabulary;

const vocabularyReducer = (state = initialState, action) => {
  switch(action.type) {
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

export default vocabularyReducer;