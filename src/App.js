import React from 'react'
import Books from './Books'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    allBooks: [],
    readBooks: [],
    currentlyReadingBooks: [],
    wantToReadBooks: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  changeShelf = this.changeShelf.bind(this)

  componentDidMount(){
      BooksAPI.getAll().then((allBooks) => {
        this.setState({
          allBooks,
          readBooks: allBooks.filter((book) => book.shelf === 'read'),
          currentlyReadingBooks: allBooks.filter((book) => book.shelf === 'currentlyReading'),
          wantToReadBooks: allBooks.filter((book) => book.shelf === 'wantToRead')
        })
      })
    }

    changeShelf(book, shelf) {
      BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf;
      BooksAPI.getAll().then((allBooks) => {
        this.setState({
          allBooks,
          readBooks: allBooks.filter((book) => book.shelf === 'read'),
          currentlyReadingBooks: allBooks.filter((book) => book.shelf === 'currentlyReading'),
          wantToReadBooks: allBooks.filter((book) => book.shelf === 'wantToRead')
        })
      })
      })
    }

  render() {

    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchBook history={history}/>  
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <Books books={this.state.currentlyReadingBooks} changeShelf={this.changeShelf} />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <Books books={this.state.wantToReadBooks} changeShelf={this.changeShelf} />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <Books books={this.state.readBooks} changeShelf={this.changeShelf} />
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
