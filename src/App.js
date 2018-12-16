import React from 'react'
import Books from './Books'
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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <Books books={this.state.allBooks.filter((book) => book.shelf === 'currentlyReading')} changeShelf={this.changeShelf}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <Books books={this.state.allBooks.filter((book) => book.shelf === 'wantToRead')} changeShelf={this.changeShelf}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <Books books={this.state.allBooks.filter((book) => book.shelf === 'read')} changeShelf={this.changeShelf}/>
                  </div>
                </div>
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
