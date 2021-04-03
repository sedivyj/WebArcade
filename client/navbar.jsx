import React, { Component } from 'react'

export default class NavBar extends Component {
  constructor(props) {
      super(props);
      // this.state = { liked: false };
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top fadable-navbar"
      style={{ 
        visibility: (this.props.isPlaying) ? 'hidden': 'visible',
        opacity:  (this.props.isPlaying) ? 0 : 100
      }}
      >
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              <a className="navbar-brand" href="index.html"><i>Capstone Web Arcade</i></a>
            </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="high_scores.html">High Scores</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}




