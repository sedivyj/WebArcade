
import React from 'react'

class About extends React.Component {
  render () {
    return (
      <div className='About'>
      <img id='banner' src='images/banner/asteroids_banner.jpg'/>
      <h1>Hey Gamers!</h1>
      <p id="about-p">We are a group of Computer Science students who decided to turn our love of arcade games
        into our capstone projects! Come play some classic video games and see if you can make it to the leader board!</p>
      <p id="about-p"><h1>Meet the team!</h1></p>
      <div className="about">
          <a href = "https://www.linkedin.com/in/joseph-sedivy-8100b415b/" target="_blank" rel="noreferrer"><img className = "profiles" src="images/profiles/Joe.png"/></a>
          <div className = "intro"><p><h3><a href = "https://www.linkedin.com/in/joseph-sedivy-8100b415b/" target="_blank" rel="noreferrer">Joe Sedivy</a></h3></p><p id = "description">Lorum Ipsum</p></div>
          <img className = "profiles" src="images/profiles/Larissa Profile.png"/>
          <div className = "intro"><p><h3><a herf="https://www.linkedin.com/in/larissa-m-ford/">Larissa Ford</a></h3></p><p id = "description">Lorum Ipsum</p></div>
          <img className = "profiles" src="images/profiles/Seth2.png"/>
          <div className = "intro"><p><h3><a herf="https://www.linkedin.com/in/seth-schalinske/">Seth Schalinske</a></h3></p><p id = "description">Russian peoples greatest export; vodka, caviar, suicidal novelists and Seth</p></div>
          <img className = "profiles" src="images/profiles/Tracen Profile.png"/>
          <div className = "intro"><p><h3><a href="https://www.linkedin.com/in/tracen-vail-5b0a6b1a3/">Tracen Vail</a></h3></p><p id = "description">Secretly Tracen is a very seriously confused llama.</p></div>
          <img className = "profiles" src="images/profiles/Spencer3.png"/>
          <div className = "intro"><p><h3><a href="https://www.linkedin.com/in/spencer-berndt-5047261a6/">Spencer Bernd</a>t</h3></p><p id = "description">Lorum Ipsum</p></div>
          <img className = "profiles" src="images/profiles/Savannah Profile.png"/>
          <div className = "intro"><p><h3><a href ="https://www.linkedin.com/in/savannah-ford-291492198/">Savannah Ford</a></h3></p><p id = "description">Here to beat all your highscores.</p></div>
      </div>
      </div>

    )
  }
}
export default About
