import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import PropTypes from "prop-types"

class BookShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  }

  onShelfSelected = e => {
    this.props.onShelfUpdated(this.props.book, e.target.value)
  }

    render () {
      const { currentShelf } = this.props

        return (
            <div className="book-shelf-changer">
              {
                //TO DO: Convert this to a stateless component
              }
              <select defaultValue={currentShelf} onChange={this.onShelfSelected}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
        )
    }
}

export default BookShelfChanger
