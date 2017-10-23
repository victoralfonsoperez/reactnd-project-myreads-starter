import React from 'react'
import { Route } from 'react-router-dom' // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars
import * as BooksAPI from './BooksAPI' // eslint-disable-line no-unused-vars 
import ListBooks from './listBooks' // eslint-disable-line no-unused-vars 
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount () {
		BooksAPI.getAll().then((books) => {
      this.setState({ books })
		})
  }

  render() {
    const { query } = this.state
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
              />

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        )}/>

        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
