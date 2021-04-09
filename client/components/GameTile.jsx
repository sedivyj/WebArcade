import React, { Component, useEffect } from 'react'

export default class GameTile extends Component {
  constructor (props) {
    super(props)
  }

  setGame = () => {
    this.props.setGame(this.props.gameid)
  }

  render () {
    const url = 'https://cs458capstone.azurewebsites.net/images/thumbnail/' + this.props.filename + 'Thumbnail.jpg'
    const altText = 'Play ' + this.props.title + '!'
    return (
      <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
        <img onClick={this.setGame} src={url} className="gameThumbNail" />
        <div>
          <span className='txt'>{altText}</span>
        </div>
      </div>
    )
  }
}
