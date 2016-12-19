import React from 'react'
import { Link, hashHistory } from 'react-router'
import { connector } from './Store'

class Landing extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.gotoSeach = this.gotoSeach.bind(this)
  }
  handleSearchTermEvent (event) {
    this.props.setSeachTerm(event.target.value)
  }
  gotoSeach (event) {
    hashHistory.push('search')
    // since using forms gotta preventDefault so form dosent go to a new page
    event.preventDefault()
  }
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmite={this.gotoSeach}>
          <input value={this.props.seachTerm} onChange={this.handleSearchTermEvent} className='search' type='text' placeholder='Search' />
        </form>
        <Link to='/seach' className='browse-all'>or Browse All</Link>
      </div>
    )
  }
}

const { func, string } = React.PropTypes

Landing.propTypes = {
  seachTerm: string,
  setSeachTerm: func
}

module.exports = connector(Landing)
