import React, { Component } from 'react'

export default class GameTile extends Component {
  constructor(props) {
    super(props)
    this.openGame.bind(this)
  }

  openGame() {
    console.log(this.props.gameid)
  }

  render() {
    const url = 'https://cs458capstone.azurewebsites.net/images/thumbnail/' + this.props.filename + 'Thumbnail.jpg'
    const altText = 'Play ' + this.props.title + '!'
    return (
      <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
        <img src={url} className="gameThumbNail" onClick={() => this.openGame()} />
        <div>
          <span className='txt'>{altText}</span>
        </div>
      </div>
    )
  }
}