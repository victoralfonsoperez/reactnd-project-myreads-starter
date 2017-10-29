import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import BookShelfChanger from './bookShelfChanger' // eslint-disable-line no-unused-vars

class BookShelf extends Component {
    render () {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.shelf}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.retrievedBooks.filter(book => book.shelf === this.props.shelf).map(book => (
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
        )
    }
}

export default BookShelf