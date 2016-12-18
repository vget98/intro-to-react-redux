const React = require('react')

const ShowCard = (props) => (
  <div className='show-card'>
    <img src={`public/img/posters/${props.poster}`} className='showcard-img' />
    <div className='showcarc-text'>
      <h3 className='showcardtitle'>{props.title}</h3>
      <h4 className='showcard-year'>({props.year})</h4>
      <p className='showcard-description'>{props.description}</p>
    </div>
  </div>
)

const { string } = React.PropTypes
// same as const string = React.PropTypes.string

ShowCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  year: string.isRequired,
  poster: string.isRequired
}

module.exports = ShowCard
