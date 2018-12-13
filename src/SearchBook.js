import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Books from './Books'

class SearchBook extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    books: this.props.books,
    SEARCH_TERMS: ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']
  }

  updateQuery = (query = this.state.query) => {
    if (this.state.SEARCH_TERMS.includes(query)) {
      this.setState({
        query: query.trim(),
        books: this.props.books.filter((book) => book.title.includes(query) || book.authors.includes(query))
      })
    } else {
      this.setState({
        query: query,
        books: this.props.books
      })
    }
  }

  clearQuery = () => {
    this.setState({
      query: '',
      books: this.props.books
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
          <ol className="books-grid">
            <Books books={this.state.books} changeShelf={this.props.changeShelf}/>
          </ol>
        </div>
      </div>
    )}
}
export default SearchBook
