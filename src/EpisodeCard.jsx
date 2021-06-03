import React, { Component } from 'react'

export default class EpisodeCard extends Component {
  render() {
    const {podcastData} = this.props
    return (
      <div>
        {podcastData.episodes.map((episode) => {
          return (<img key={episode.id} src={episode.cover}/>)
        })}
      </div>
    )
  }
}
