import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars
import BookShelf from './bookShelf' // eslint-disable-line no-unused-vars

class listBooks extends Component {
    state = {
        query: ''
    }

    render () {
        const { books } = this.props
        const shelfs = {
          currentlyReading: 'currentlyReading',
          wantToRead: 'wantToRead',
          read :'read'
        }

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
                <div>
                  <BookShelf
                    shelf={shelfs.currentlyReading}
                    retrievedBooks={books}
                    shelfTitle='Currently Reading'
                  />

                  <BookShelf
                    shelf={shelfs.wantToRead}
                    retrievedBooks={books}
                    shelfTitle='Want to Read'
                  />

                  <BookShelf
                    shelf={shelfs.read}
                    retrievedBooks={books}
                    shelfTitle='Read'
                  />
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
