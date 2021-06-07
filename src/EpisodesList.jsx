import React, { Component } from 'react'
import EpisodeCard from './EpisodeCard';

export default class EpisodesList extends Component {
  constructor() {
    super()
  }
  wipFunction(e) {
    e.preventDefault()
    alert(`Obrigado pro testar o MVP.
Essa funcionalidade ainda está em desenvolvimento.`)
  }
  render() {
    const {podcastData} = this.props
    return (
      <ol className='episodes-list'>
        {podcastData.episodes.map((episode) => <EpisodeCard episode={episode} key={episode.id} />)}
        <li className="filling-empty-space-childs" onClick={this.wipFunction}>
          <p className='btn-class btn-gradient load-more btn-float--hover'>carregar mais</p>
        </li>
        <li className="filling-empty-space-childs"></li>
        <li className="filling-empty-space-childs"></li>
        <li className="filling-empty-space-childs"></li>
      </ol>
    )
  }
}
