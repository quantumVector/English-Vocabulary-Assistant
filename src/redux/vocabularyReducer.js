import vocabulary from './vocabulary';

const initialState = vocabulary;

const vocabularyReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default vocabularyReducer;