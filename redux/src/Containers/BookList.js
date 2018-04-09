import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBookAction } from '../actions/index';

class BookList extends Component {

	renderBooks() {
		return this.props.books.map( book =>
			<li
				key={book.title}
			 	onClick={() => this.props.selectBookAction(book)}>{book.title}</li>
		)
	}

	render() {
		return (
			<ul>
				{this.renderBooks()}
			</ul>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books
	}
}


export default connect(mapStateToProps,{selectBookAction})(BookList);
