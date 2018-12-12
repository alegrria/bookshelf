import React, { Component } from 'react'
import SelectShelf from './SelectShelf'

class Books extends Component {

  render(){

    const { books } = this.props

    return (
      <ol className="books-grid"> {books.map((book) =>
        <li key={book.id} >
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
              <div className="book-shelf-changer">
                <SelectShelf book={book}/>
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
