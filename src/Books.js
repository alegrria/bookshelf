import React from 'react'
import SelectShelf from './SelectShelf'
import PropTypes from 'prop-types';

const Books = (props) => {
  Books.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

    return (

      <ol className="books-grid"> {props.books.map((book) =>
        <li key={book.id} >
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'https://dummyimage.com/128x193/2e7c31/fff.png&text=Cover+Missing'})`}}></div>
              <div className="book-shelf-changer">
                <SelectShelf book={book} changeShelf={props.changeShelf} allBooks={props.allBooks? props.allBooks : []}/>
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
