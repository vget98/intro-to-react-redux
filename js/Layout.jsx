import React from 'react'

const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

const { element } = React.PropTypes.string

Layout.propTypes = {
  children: element
}

module.exports = Layout
