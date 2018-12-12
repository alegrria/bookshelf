import React, { Component } from 'react'
import SelectShelf from './SelectShelf'
import PropTypes from 'prop-types';

class Books extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  render(){
    
    return (
      <ol className="books-grid"> {this.props.books.map((book) =>
        <li key={book.id} >
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
              <div className="book-shelf-changer">
                <SelectShelf book={book} changeShelf={this.props.changeShelf}/>
              </div>
            </div>
            <div className="book-title">
              <p>{book.title}</p>
            </div>
            <div className="book-authors">{book.authors.join(', ')}</div>
          </div>
        </li>
      )}</ol>
    )
  }
}
export default Books
