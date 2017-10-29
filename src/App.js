import React from 'react'
import { Route } from 'react-router-dom' // eslint-disable-line no-unused-vars
import * as BooksAPI from './BooksAPI' // eslint-disable-line no-unused-vars 
import ListBooks from './listBooks' // eslint-disable-line no-unused-vars 
import SearchPage from './searchPage' // eslint-disable-line no-unused-vars 
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    query: ''
  }

  componentDidMount () {
		BooksAPI.getAll().then((books) => {
      this.setState({ books })
		})
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchPage
            query={this.state.query}
          />
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
