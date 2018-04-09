import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

	render() {
		if(this.props.activeBook.length === 0) {
			return (
				<h3>Select a book</h3>
			);
		}

		return (
			<div>
				<h1>Details For:</h1>
				<p>{this.props.activeBook.title}</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		activeBook: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail);
