import { BOOK_SELECTED } from '../actions';

const activeBookReducer = (state=[],action) => {
	switch(action.type) {
		case BOOK_SELECTED:
			console.log(action);
			return action.payload;

		default:
			return state;
	}
}

export default activeBookReducer;
