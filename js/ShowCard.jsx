const React = require('react')
const { Link } = require('react-router')

const ShowCard = (props) => (
  <Link to={`/details/${props.imbdID}`}>
    <div className='show-card'>
      <img src={`public/img/posters/${props.poster}`} className='showcard-img' />
      <div className='showcarc-text'>
        <h3 className='showcardtitle'>{props.title}</h3>
        <h4 className='showcard-year'>({props.year})</h4>
        <p className='showcard-description'>{props.description}</p>
      </div>
    </div>
  </Link>
)

const { string } = React.PropTypes
// same as const string = React.PropTypes.string

ShowCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  year: string.isRequired,
  poster: string.isRequired,
  imbdID: string.isRequired
}

module.exports = ShowCard
