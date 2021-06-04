import React, { Component } from 'react'

export default class EpisodeCard extends Component {
  render() {
    const {podcastData} = this.props
    return (
      <div>
        {podcastData.episodes.map((episode) => {
          return (
            <div className="episode-card" key={episode.id}>
              <img className='episode-card__img' alt='thumbnail' src={episode.cover}/>
              <div className='episode__info flex-column'>
                <div className='flex-row'>
                  <p>{episode.created_at}</p>
                  <p> &nbsp;•&nbsp;</p>
                  <p>{episode.duration}</p>
                </div>
                <h2>{episode.title}</h2>
                <h3>{episode.description}</h3>
                <button>COMENTAR</button>
                <p className='episode__number'>{ episode.title.slice(episode.title.indexOf('#')+1)}</p>
              </div>
              <button className='episode__play-btn'></button>
            </div>
          )
        })}
      </div>
    )
  }
}
