import { BOOK_SELECTED } from './types';
// An action always has a type and a payload
export const selectBookAction = book => {
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}
