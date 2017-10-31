import React from 'react'
import { Switch, Route } from 'react-router' // eslint-disable-line no-unused-vars
import * as BooksAPI from './BooksAPI' // eslint-disable-line no-unused-vars 
import ListBooks from './listBooks' // eslint-disable-line no-unused-vars 
import SearchPage from './searchPage' // eslint-disable-line no-unused-vars 
import NoMatch from './noMatch' // eslint-disable-line no-unused-vars 
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

  onShelfChangeDone = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState({books: this.state.books.filter((currentBook) => currentBook.id !== book.id).concat(book)})
    })
  }

  render() {
    let currentBooksOnShelfs = this.state.books.map((book)=>({id: book.id, shelf: book.shelf}))

    return (
      <div className="app">
        <Switch>
          <Route path='/search' render={() => (
            <SearchPage
              onUpdateSelection={this.onShelfChangeDone}
              currentShelfBooksIds={currentBooksOnShelfs}
            />
          )}/>

          <Route exact path='/' render={() => (
            <ListBooks
              books={this.state.books}
              onUpdateSelection={this.onShelfChangeDone}
            />
          )}/>

          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
