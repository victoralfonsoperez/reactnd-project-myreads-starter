import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars
import * as BooksAPI from "./BooksAPI" // eslint-disable-line no-unused-vars
import BookShelf from './bookShelf' // eslint-disable-line no-unused-vars

class SearchPage extends Component {
	state = {
    	books: [],
    	query: ''
	}

	handleInputChange = (value) => {
		this.searchQuery(value.trim())
		this.setState({ query: value })
	}

	searchQuery (query) {
		BooksAPI.search(query).then(
			(books) => {
      			this.setState({ books })
			}
		).catch(() => {
  			this.setState({ books: [] })
		})
	}

	onShelfDone = (book, shelf) => {
		this.props.onShelfChange(book, shelf)
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">
						Close
					</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							onChange={event => this.handleInputChange(event.target.value)}
						/>

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid"></ol>
				</div>

				<div className="list-books-content">
						<div>
							{this.state.books && <BookShelf
									retrievedBooks={this.state.books}
                  onShelfChange={this.props.dummyFunc}
								/>
							}
						</div>
				</div>
	    </div>
		)
	}
}

export default SearchPage