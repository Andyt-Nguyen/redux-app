import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

	render() {
		return (
			<div>
				<h3>Book selected:</h3>
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
