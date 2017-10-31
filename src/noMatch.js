import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars

class NoMatch extends Component {
    render () {
        return (
            <div className="app">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="no-match">
                    <p>We're sorry, But the page you're looking for, is gone</p>
                    <br/>
                    <Link className="return-to-myreads" to="/">
                        Return to MyReads
                    </Link>
                </div>
            </div>
        )
    }
}

export default NoMatch