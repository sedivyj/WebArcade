import React from 'react'
import PropTypes from 'prop-types'

function HighScoreTile (props) {
  return (
    <div className='col-sm-6 col-md-4 col-lg-3 mb-4 text-center game'>
      <h3>{props.title}</h3>
      <img src={`images/thumbnail/${props.filename}Thumbnail.jpg`}
        alt={props.title}
        style={{ width: '150px', height: '150px' }}/>
      <div className='counter'>{props.maxScore}</div>
      <h4>{props.initial}</h4>
    </div>
  )
}

HighScoreTile.propTypes = {
  title: PropTypes.string,
  filename: PropTypes.string,
  maxScore: PropTypes.number,
  initial: PropTypes.string
}

export default HighScoreTile
