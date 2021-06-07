import React, { Component } from 'react'
import youtubeImage from './youtube.svg'
import spotifyImage from './spotify.svg'
import downloadImage from './download.svg'

export default class LinksContainer extends Component {
  constructor(props) {
    super(props)
    this.youtubeLink = this.youtubeLink.bind(this)
}
youtubeLink(link) {
  return `https://www.youtube.com/watch?v=${link}`
}

linkHandler(link, callback) {
  if (callback) {
    return window.location.href(callback(link))
  } else {
    return window.location.href=link;
  }
}



render() {
  const { onMouseLeave, episodeFeed, mp3, wipFunction } = this.props
  
  return (
      <div className='links-container' onMouseLeave={onMouseLeave}>
        <a href={this.youtubeLink(episodeFeed.youtube)} target='_blank' 
          className="btn-class btn-float--hover btn-gradient">
            <img className='link__youtube' src={youtubeImage} alt="" /> youtube
        </a>
        <a href={episodeFeed.spotify} target='_blank' className="btn-class btn-float--hover btn-gradient">
          <img className='link__spotify' src={spotifyImage} alt="" />spotify
        </a>
        <a href={mp3} target='_blank' className="btn-class btn-float--hover btn-gradient"><img className='link__download' src={downloadImage} alt="" />baixar</a>
        <a onClick={wipFunction} className="btn-class text-btn">ver mais</a>
      </div>
    )
  }
}
