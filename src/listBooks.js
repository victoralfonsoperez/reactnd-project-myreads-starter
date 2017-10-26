import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars
import BookShelfChanger from './bookShelfChanger' // eslint-disable-line no-unused-vars

class listBooks extends Component {
    state = {
        query: ''
    }

    render () {
        const { books } = this.props

        let retrievedBooks = books // eslint-disable-line no-unused-vars
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
                <div>

                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    {
                      //TO DO: CREATE BOOKSHELF BOOK COMPONENT
                    }
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {retrievedBooks.filter(book => book.shelf === 'currentlyReading').map(book => (
                          <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                    }}>
                                </div>
                                <BookShelfChanger
                                    currentShelf={book.shelf}
                                />
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.authors[0]}</div>
                            </div>
                          </li>
                        ))}
                      </ol>
                      </div>
                  </div>

                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {retrievedBooks.filter(book => book.shelf === 'wantToRead').map(book => (
                          <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                    }}>
                                </div>
                                <BookShelfChanger
                                  currentShelf={book.shelf}
                                />
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.authors[0]}</div>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {retrievedBooks.filter(book => book.shelf === 'read').map(book => (
                          <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                    }}>
                                </div>
                                <BookShelfChanger
                                  currentShelf={book.shelf}
                                />
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.authors[0]}</div>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                </div>
            </div>

            <div className="open-search">
              <Link to="/search">
                Add a book
              </Link>
            </div>
          </div>
        )
    }
}

export default listBooks
