import React from 'react'
import Shelf from './Shelf'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    allBooks: []
  }

  changeShelf = this.changeShelf.bind(this)

  componentDidMount(){
      BooksAPI.getAll().then((allBooks) => {
        this.setState({
          allBooks
        })
      })
    }

    changeShelf(book, shelf) {
      BooksAPI.update(book, shelf).then(response => {
        book.shelf = shelf;
        BooksAPI.getAll().then((allBooks) => {
          this.setState({
            allBooks
          })
        })
      })
    }

  render() {

    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchBook history={history} books={this.state.allBooks} changeShelf={this.changeShelf}/>
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf name={'Currently Reading'} books={this.state.allBooks.filter((book) => book.shelf === 'currentlyReading')} changeShelf={this.changeShelf}/>
                <Shelf name={'Want to Read'} books={this.state.allBooks.filter((book) => book.shelf === 'wantToRead')} changeShelf={this.changeShelf}/>
                <Shelf name={'Read'} books={this.state.allBooks.filter((book) => book.shelf === 'read')} changeShelf={this.changeShelf}/>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
