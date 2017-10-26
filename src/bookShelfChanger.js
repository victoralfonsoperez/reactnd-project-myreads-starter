import React, { Component } from 'react' // eslint-disable-line no-unused-vars

class bookShelfChanger extends Component {
  state = {
    query: ''
  }
    render () {
      const { currentShelf } = this.props

        return (
            <div className="book-shelf-changer">
              <select defaultValue={currentShelf}>
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

export default bookShelfChanger
