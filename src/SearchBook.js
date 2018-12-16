import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Books from './Books'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    books: [],
    allBooks: this.props.books,
    error: ''
    }

  updateQuery = (query) => {
    if (query) {
      BooksAPI.search(query, 20).then((allBooks) =>
      this.setState({
        query: query,
        books: allBooks.length > 0 ? allBooks : [],
        error: allBooks.length > 0 ? 'Search successful' : 'Nothing was found on your search'
      })).catch(function(e) {
        console.log(e);
      })
    } else {
      this.setState({
        query: '',
        books: []
      })
    }
  }

  clearQuery = () => {
    this.setState({
      query: '',
      books: []
    })
  }

  render(){

    return (

      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => this.props.history.push('/')}>Close</button>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <p>{this.state.error}</p>
          <ol className="books-grid">
            <Books books={this.state.books} changeShelf={this.props.changeShelf} allBooks={this.props.books}/>
          </ol>
        </div>
      </div>
    )}
}
export default SearchBook
