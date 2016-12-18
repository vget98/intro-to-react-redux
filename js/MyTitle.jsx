// everything is a function
// using standard so no semicolons
import React from 'react'

// a composite component, a component of our own creation
const MyTitle = React.createClass({
  // should keep render pure, does not change anything else we dont know how many times render will be called
  render () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={ style }>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle
