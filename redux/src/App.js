import React, { Component } from 'react';
import BookList from './Containers/BookList';
import BookDetail from './Containers/BookDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
				<BookDetail />
      </div>
    );
  }
}

export default App;
