import React, { Component } from 'react'
import EpisodesList from './EpisodesList';
import './App.css'

export default class App extends Component {
  constructor () {
    super()
    this.fetchFlow =  this.fetchFlow.bind(this)
    this.state = {
      fetchDone: false,
      podcastData: {
        episodes: undefined,
      }
    }
  }
  
  async fetchFlow(){
    const API_URL = 'https://flow3r-api-master-2eqj3fl3la-ue.a.run.app/v2/episodes/list';
    const myObject = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"params":{"filter":"episodes"}}),
    };

    const response = await fetch(API_URL, myObject);
    const data = await response.json();
    this.setState({ podcastData: data, fetchDone: true });

  };
  
 componentDidMount() {
    this.fetchFlow()
  }
  render() {  
    const { podcastData } = this.state
    return (
      <div>
        {this.state.fetchDone && <EpisodesList podcastData={ podcastData }/>}
      </div>
    )
  }
}


// Salve Hugo!
// Temos uma API pra cada criador de conteúdo que retorna a listagem de episódio
// METHOD POST https://flow3r-api-master-2eqj3fl3la-ue.a.run.app/v2/episodes/list?creator_profile_name=venuspodcast

// BODY:
// {"params":{"filter":"episodes"}}
// caso envie sem o creator_profile_name, pega o do flow
// pra fazer a paginação, vc pode enviar o seguinte body
// {"params":{"filter":"episodes","paging":{"previous":null,"next":"2021-05-18T17:00:00-03:00"}}}
// sendo params.paging.next o valor que retornou na resposta anterior