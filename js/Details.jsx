const React = require('react')
import Header from './Header'
const { connector } = require('./Store')

class Details extends React.Component {
  assignShow (id) {
    const showArray = this.props.shows.filter((show) => show.imbdID === id)
    return showArray[0]
  }
  render () {
    const { title, description, year, poster, trailer } = this.assignShow(this.props.param.id)
    return (
      <div className='container'>
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h1 className='video-year'>({year})</h1>
          <img className='video-poster' src={`/public/img/posters/${poster}`} />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
}

const { arrayOf, object } = React.PropTypes

Details.propTypes = {
  param: object,
  shows: arrayOf(object).isRequired
}

module.exports = connector(Details)
