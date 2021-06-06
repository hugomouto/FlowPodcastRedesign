import React, { Component } from 'react'
import LinksContainer from './LinksContainer.jsx'

export default class EpisodeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shownLinks: false,
    }
    this.displayLinks = this.displayLinks.bind(this)
    this.hideLinks = this.hideLinks.bind(this)
  }

  displayLinks(){
    this.setState({
      shownLinks: true,
    })
  }

  hideLinks(){
    this.setState({
      shownLinks: false,
    })
  }

  render() {
    const { episode } = this.props;
    return (
      <li className="episode-card flex-column" key={episode.id}>
        <img className='episode-card__img' alt='thumbnail' src={episode.cover}/>
        <div className='episode__info flex-column'>
          <div className='flex-row episode__time-info'>
            <p className='is--overline'>
              {episode.duration}
              &nbsp;•&nbsp;
              {episode.created_at}
            </p>
          </div>
          <h2>{episode.title.split(" - ")[0]}</h2> {/*Split method added to remove extra text from title*/}
          <h3>{episode.description}</h3>
          <p className='episode__number'>
            { episode.title.slice(episode.title.indexOf('#')+1)} {/*Extra method added ti slice episode # out of text*/}
          </p>
           <a className='episode__comment-btn'>COMENTAR</a>
          <button 
            className='episode__play-btn'
            onClick={this.displayLinks}>
              &#9654;
          </button>
          {this.state.shownLinks && <LinksContainer onMouseLeave={this.hideLinks} />}
        </div>
      </li>
    )
  }
}