import React, { Component } from 'react'
import EpisodeCard from './EpisodeCard';

export default class EpisodesList extends Component {
  toggleLinksContainer(index){
    console.log(index)
    if (index === this.state.displayLinksContainer) {
      return `links-container--is-active`
    } else {
      return `links-container`
    }
  }
  
  render() {
    const {podcastData} = this.props
    return (
      <ol className='episodes-list'>
        {podcastData.episodes.map((episode) => <EpisodeCard episode={episode} key={episode.id} />)}
        <li className="filling-empty-space-childs"></li>
        <li className="filling-empty-space-childs"></li>
        <li className="filling-empty-space-childs"></li>
        <li className="filling-empty-space-childs"></li>
      </ol>
    )
  }
}
