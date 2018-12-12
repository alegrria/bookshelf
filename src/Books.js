import React, { Component } from 'react'

class Books extends Component {

  render(){

    const { books } = this.props

    return (
      <ol className="books-grid"> {books.map((book) =>
        <li>
          <div key={book.id} className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
              <div className="book-shelf-changer">
                <select>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
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
