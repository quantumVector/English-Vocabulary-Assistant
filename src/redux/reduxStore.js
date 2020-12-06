import { combineReducers, createStore } from 'redux';
import vocabularyReducer from './vocabularyReducer';

const reducers = combineReducers({
  vocabulary: vocabularyReducer,
});

const store = createStore(reducers);

export default store;