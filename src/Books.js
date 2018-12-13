import React, { Component } from 'react'
import SelectShelf from './SelectShelf'
import PropTypes from 'prop-types';

const Books = (props) => {

    return (
      <ol className="books-grid"> {props.books.map((book) =>
        <li key={book.id} >
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`}}></div>
              <div className="book-shelf-changer">
                <SelectShelf book={book} changeShelf={props.changeShelf} />
              </div>
            </div>
            <div className="book-title">
              <p>{book.title}</p>
            </div>
            {book.authors && <div className="book-authors">{book.authors.join(', ')}</div>}
          </div>
        </li>
      )}</ol>
    )
}
export default Books
