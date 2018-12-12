import React, { Component } from 'react'

class SelectShelf extends Component {

  handleChange = (event) => {
    this.props.changeShelf(this.props.book, event.target.value)
  }

  render(){

    return (
      <select key={this.props.book.id} onChange={this.handleChange}>
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
