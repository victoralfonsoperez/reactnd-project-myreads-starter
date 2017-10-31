import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import BookShelfChanger from './bookShelfChanger' // eslint-disable-line no-unused-vars

class BookShelf extends Component {
    onShelfDone = (book, shelf) => {
        this.props.onShelfChange(book, shelf)
    }

    render () {
        return (
            <div className="bookshelf">
            {this.props.shelf && <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>}
            <div className="bookshelf-books">
              <ol className="books-grid">
                {!this.props.shelf && this.props.retrievedBooks && this.props.retrievedBooks.map(book => (
                  <li key={book.id}>
                    <div className="book">
                      {
                        //TO DO: Create a book component
                      }
                      <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail}), url('http://via.placeholder.com/128x193?text=No%20Cover')`
                            }}>
                        </div>
                        
                        <BookShelfChanger
                            currentShelf={book.shelf || 'none'}
                            book={book}
                            bookTitle={book.title}
                            onShelfUpdated={this.onShelfDone}
                        />
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                    </div>
                  </li>
                ))}

                {this.props.shelf && this.props.retrievedBooks && this.props.retrievedBooks.filter(book => book.shelf === this.props.shelf).map(book => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        {book.imageLinks && book.imageLinks.smallThumbnail &&
                          <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})`
                            }}>
                        </div>
                        }
                        <BookShelfChanger
                            currentShelf={book.shelf}
                            book={book}
                            bookTitle={book.title}
                            onShelfUpdated={this.onShelfDone}
                        />
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
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
