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
    this.convertDate = this.convertDate.bind(this)
    this.convertDuration = this.convertDuration.bind(this)
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
      <li className="episode-card flex-column">
        <img className='episode-card__img' alt='thumbnail' src={episode.cover}/>
        <div className='episode__info flex-column'>
          <div className='flex-row episode__time-info'>
            <p className='is--overline'>
              {this.convertDuration(episode.duration)}
              &nbsp;•&nbsp;
              {this.convertDate(episode.created_at)}
            </p>
          </div>
          <h2>{episode.title.split(" - ")[0]}</h2> {/*Split method added to remove extra text from title*/}
          <h3>{episode.description}</h3>
          <p className='episode__number'>
            { episode.title.slice(episode.title.indexOf('#')+1)} {/*Extra method added to slice episode # out of text*/}
          </p>
           <a className='episode__comment-btn text-btn'>COMENTAR</a>
          <button 
            className='episode__play-btn btn-float--hover'
            onClick={this.displayLinks}>
              &#9654;
          </button>
          {this.state.shownLinks && <LinksContainer episodeFeed={episode.feed} onMouseLeave={this.hideLinks} />}
        </div>
      </li>
    )
  }
}