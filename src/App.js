import React, { Component } from 'react';
import './App.css';
import axios from "axios"

class App extends Component {

constructor(props){
  super(props);
  this.state = {  //1. setting our state as "projects"
    weather: [],
    value: '',

  }
}

  getNewWeather(e){
    e.preventDefault();

    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.value}&units=imperial&APPID=d0458c4189cf033bf80c84d7a0d38ab0`)
      .then((response)=> {
        console.log(response);


        this.setState({
          weather: response.data.list,
        })
      });
  }

  changedInput(e){

    this.setState({
    value:e.target.value
  })

}


  render() {

    const weather = this.state.weather.map(day=>{
      return (
      <div>
      <p>High:{day.temp.max}</p>
      <p>Low{day.temp.min}</p>
      </div>
    )
    })

    return (
      <div className="App">
        <h3>Weather</h3>

        <form onSubmit={this.getNewWeather.bind(this)}>
          <input onChange={this.changedInput.bind(this)} type="text" placeholder="Enter City" />
        </form>

        {weather}


      </div>
    );
  }
}

export default App;
