import React, { Component } from 'react'

export default class EpisodeCard extends Component {

  convertDate(date){ {/*Change date format from YYYY:MM:DD to 'Day of Month of Year'*/}
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
    return `${dateArray[2]} de ${dateArray[1]} de ${dateArray[0]}`
  }

  convertDuration(duration) { {/*Change duration format from HH:MM:SS to 'HH hours and MM minutes'*/}
    const durationArray = duration.split(":");
    let pluralHour = ''
    let pluralMinute = ''
    durationArray[0] = parseInt(durationArray[0]);
    durationArray[1] = parseInt(durationArray[1]);
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
      <div>
        {podcastData.episodes.map((episode) => {
          return (
            <div className="episode-card flex-column" key={episode.id}>
              <img className='episode-card__img' alt='thumbnail' src={episode.cover}/>
              <div className='episode__info flex-column'>
                <div className='flex-row episode__time-info'>
                  <p className='is--overline'>{this.convertDuration(episode.duration)}</p>
                  <p className='is--overline'> &nbsp;•&nbsp;</p>
                  <p className='is--overline'>{this.convertDate(episode.created_at)}</p>
                </div>
                <h2>{episode.title.split(" - ")[0]}</h2> {/*Split method added to remove extra text from title*/}
                <h3>{episode.description}</h3>
                <p className='episode__number'>
                  { episode.title.slice(episode.title.indexOf('#')+1)} {/*Extra method added ti slice episode # out of text*/}
                </p>
                 <a className='episode__comment-btn'>COMENTAR</a>
                <button className='episode__play-btn'>&#9654;</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
