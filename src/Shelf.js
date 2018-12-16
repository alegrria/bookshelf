import React from 'react'
import PropTypes from 'prop-types'
import Books from './Books'

const Shelf = (props) => {
  Shelf.propTypes = {
  name: PropTypes.string,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

return (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.name}</h2>
    <div className="bookshelf-books">
      <Books books={props.books} changeShelf={props.changeShelf}/>
    </div>
  </div>
)
}
export default Shelf
