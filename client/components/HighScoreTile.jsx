import React from 'react'

function HighScoreTile (props) {
  return (
    <div className='game'>
      <h3>{props.title}</h3>
      <i className='fab fa-twitter fa-4x'></i>
      <img src={`images/thumbnail/${props.filename}Thumbnail.jpg`}
        style={{
          width: '150px',
          height: '150px'
        }}/>
      <div className='counter' data-target={`${props.maxScore}`}></div>
      <h4>{props.initial}</h4>
    </div>
  )
}

export default HighScoreTile
