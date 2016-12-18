// const React = require('react')
// const { Link } = require('react-router')

// const Landing = () => (
//   <div className='app'>
//     <div className='details'>
//       <h1 className='title'>svideo</h1>
//       <input className='details' type='text' placeholder='Search' />
//       <Link to='/search' className='browse-all'> or Browse All</Link>
//     </div>
//   </div>
// )

// module.exports = Landing

// Landing.js
import React from 'react'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <input type='text' placeholder='Search' />
        <a>or Browse All</a>
      </div>
    )
  }
})

export default Landing
