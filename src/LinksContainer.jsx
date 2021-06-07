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
  return `'https://www.youtube.com/watch?v='`
}

render() {
  const { onMouseLeave, episodeFeed } = this.props
  
  return (
      <div className='links-container' onMouseLeave={onMouseLeave}>
        <a href={this.youtubeLink(episodeFeed.youtube)} target='_blank' 
          className="btn-class btn-float--hover btn-gradient">
            <img className='link__youtube' src={youtubeImage} alt="" /> youtube
        </a>
        <a href="" className="btn-class btn-float--hover btn-gradient"><img className='link__spotify' src={spotifyImage} alt="" />spotify</a>
        <a href='' className="btn-class btn-float--hover btn-gradient"><img className='link__download' src={downloadImage} alt="" />baixar</a>
        <a href="" className="btn-class text-btn">ver mais</a>
      </div>
    )
  }
}
