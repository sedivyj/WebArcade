import React from 'react'

function HighScoreTile (props) {
  return (
    <div className='game'>
      <h3>Title</h3>
      <i className='fab fa-twitter fa-4x'></i>
      <img src={`images/thumbnail/froggerThumbnail.jpg`}
        style={{
          width: '150px',
          height: '150px'
        }}/>
      <div className='counter' data-target='500'></div>
      <h4>INITIALS</h4>
    </div>
  )
}

export default HighScoreTile
