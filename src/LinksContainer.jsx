import React, { Component } from 'react'
import youtubeImage from './youtube.svg'
import spotifyImage from './spotify.svg'
import downloadImage from './download.svg'

export default class LinksContainer extends Component {
  render() {
    const { onMouseLeave } = this.props
    return (
      <div className='links-container' onMouseLeave={onMouseLeave}>
        <a href="" className="btn-class btn-gradient"><img className='link__youtube' src={youtubeImage} alt="" /> youtube</a>
        <a href="" className="btn-class btn-gradient"><img className='link__spotify' src={spotifyImage} alt="" />spotify</a>
        <a href="" className="btn-class btn-gradient"><img className='link__download' src={downloadImage} alt="" />baixar</a>
        <a href="" className="btn-class btn-text">ver mais</a>
      </div>
    )
  }
}
