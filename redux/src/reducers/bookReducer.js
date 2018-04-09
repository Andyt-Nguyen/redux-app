
const bookReducer = (state=[],action) => {
	return [
		{ title: 'Javascript: The Good Parts' },
		{ title: 'Harry Potter' },
		{ title: 'The Dark Tower' },
		{ title: 'Eloquent Ruby' },
	]
}

export default bookReducer;
