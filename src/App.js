import axios from "axios";
import React from "react"
import './index.css';

function App() {
 const [data, setData ] = React.useState({});
 const [location, setLocation] = React.useState("");
 const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=57db612b1baa87bc9020887e63fc63d5`
 
 const searchLocation =  (event) => {
  if (event.key === 'Enter'){
    axios.get(url).then( response => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
  
 }

 return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        placeholder="Enter Location"
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}<sup>o</sup>C</h1> : <h1>Enter City </h1>}
            <div className="min">
            <div> 
              <small>Temp min :</small>
              {data.main ? <p>{data.main.temp_min}<sup>o</sup>C</p> : null}
              </div>
              <div> 
              <small>Temp man :</small>
             {data.main ? <p>{data.main.temp_max}<sup>o</sup>C</p> : null}
              </div>
              </div>
          </div>
          
          <div className="description">
          <p>Sky  </p>
            {data.weather ? <p>{data.weather[0].main}</p> : null} 
          </div>
        </div>
        <div className="bottom">
        <div className="feels">
          <p className="bold">Feels Like</p>
          {data.main ? <p>{data.main.feels_like}</p> : null} 
          
        </div>
        <div className="humidity">
          <p className="bold">Humidity</p>
          {data.main ? <p>{data.main.humidity}</p> : null} 
        </div>
        <div className="wind">
          <p className="bold">Wind Speed </p>
          {data.wind ? <p>{data.wind.speed  } MPH</p> : null} 
          <p></p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App;
