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

  


  convertDate(date){ /*Change date format from YYYY:MM:DD to 'D of M of Y'*/
    const dateArray = (date.split("T")[0]).split("-")
    switch (dateArray[1]) {
      case `01`:
        dateArray[1] = 'Janeiro'
        break;
      case `02`:
        dateArray[1] = 'Fevereiro'
        break;
      case `03`:
        dateArray[1] = 'Março'
        break;
      case `04`:
        dateArray[1] = 'Abril'
        break;
      case `05`:
        dateArray[1] = 'Maio'
        break;
      case `06`:
        dateArray[1] = 'Junho'
        break;
      case `07`:
        dateArray[1] = 'Julho'
        break;
      case `08`:
        dateArray[1] = 'Agosto'
        break;
      case `09`:
        dateArray[1] = 'Setembro'
        break;
      case `10`:
        dateArray[1] = 'Outubro'
        break;
      case `11`:
        dateArray[1] = 'Novembro'
        break;
      case `12`:
        dateArray[1] = 'Dezembro'
        break;
      default:
        break;
    }
    return `${parseInt(dateArray[2])} de ${dateArray[1]} de ${dateArray[0]}`
  }

  convertDuration(duration) { /*Change duration format from HH:MM:SS to 'HH hours and MM minutes'*/
    const durationArray = duration.split(":").map( item => parseInt(item));
    let pluralHour = ''
    let pluralMinute = ''
    if (durationArray[0] > 1) {
      pluralHour = 's'
    }
    if (durationArray[1] > 1) {
      pluralMinute = 's'
    }
    return`${durationArray[0]} hora${pluralHour} e ${durationArray[1]} minuto${pluralMinute}`
  }
  render() {
    const {podcastData} = this.props
    return (
      <ol className='episodes-list'>
        {podcastData.episodes.map((episode) => <EpisodeCard episode={episode} />)}
        <li className="filling-empty-space-childs"></li>
        <li className="filling-empty-space-childs"></li>
        <li className="filling-empty-space-childs"></li>
        <li className="filling-empty-space-childs"></li>
      </ol>
    )
  }
}
