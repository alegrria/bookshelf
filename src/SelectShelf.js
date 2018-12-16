import React, { Component } from 'react'
import PropTypes from 'prop-types';

class SelectShelf extends Component {

  state= {
    shelf: 'none'
  }

  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired,
    allBooks: PropTypes.array.isRequired
  };

  handleChange = (event) => {
    this.props.changeShelf(this.props.book, event.target.value)
  }

  render(){

    return (
      <select key={this.props.book.id} value={this.props.book.shelf ? this.props.book.shelf : this.props.allBooks.find(book => book.id === this.props.book.id) ? this.props.allBooks.find(book => book.id === this.props.book.id).shelf : 'none'} onChange={this.handleChange}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}
export default SelectShelf
