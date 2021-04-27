import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NavBar extends Component {
  constructor (props) {
    super(props)
    // this.state = { liked: false };
    this.viewHome = this.viewHome.bind(this)
    this.viewHighScore = this.viewHighScore.bind(this)
    this.viewContact = this.viewContact.bind(this)
    this.viewAbout = this.viewAbout.bind(this)
  }

  viewHome (event) {
    event.preventDefault()

    this.props.setActivePage('Home')
  }

  viewHighScore (event) {
    event.preventDefault()
    this.props.setActivePage('HighScore')
  }

  viewAbout (event) {
    event.preventDefault()

    this.props.setActivePage('About')
  }

  viewContact (event) {
    event.preventDefault()

    this.props.setActivePage('Contact')
  }

  render () {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top fadable-navbar"
      style={{
        visibility: (this.props.isPlaying) ? 'hidden' : 'visible',
        opacity: (this.props.isPlaying) ? 0 : 100
      }}
      >
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              <a className="navbar-brand" onClick={this.viewHome}><i>Capstone Web Arcade</i></a>
            </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
                <li><a onClick={this.viewHome}>Home</a></li>
                <li><a onClick={this.viewAbout}>About</a></li>
                <li><a onClick={this.viewContact}>Contact</a></li>
                <li><a onClick={this.viewHighScore}>High Scores</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

NavBar.propTypes = {
  isPlaying: PropTypes.bool,
  setIsHighScore: PropTypes.func,
  setAbout: PropTypes.func,
  setContact: PropTypes.func,
  setActivePage: PropTypes.func
}
