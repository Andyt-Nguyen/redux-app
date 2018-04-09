import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import activeBookReducer from './activeBookReducer';

const rootReducer = combineReducers({
	books: bookReducer,
	activeBook: activeBookReducer
});

export default rootReducer;
