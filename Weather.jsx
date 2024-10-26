import  { useState, useEffect } from 'react';
import './weather.css';
import Navbar from './Navbar';
export default function Weather() {
  const [data, setData] = useState(null);
  const [cityName, setCityName] = useState("delhi");
  const [count,setCount]=useState(0)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5c15980e16046d74aee35021e812df60`;

  const handleChange = (e) => {
    setCityName(e.target.value);
  };
  const handleKeyDown=(e)=>{
    if(e.key==='Enter'){
    setCount(count+1)
  console.log(count)}

  }

  useEffect(() => {
    const fetchData = async () => {
      const fetchUrl = await fetch(url);
      const fetchedData = await fetchUrl.json();
      setData(fetchedData);
    };

    fetchData();
  }, [count]);

  const getCardinalDirection = (angle) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(angle / 45) % 8;
    return directions[index];
  };

  return (
    <>
    <Navbar/>
      <div id="weather-app">
        {data && (
          <div className='weather-container' key={data.id}>
            <h1 className='app-title'>Weather</h1>
            <input
              className='city-input'
              type="text"
              onChange={handleChange}
              value={cityName}
              onKeyDown={handleKeyDown}
              key="city-input"
            ></input>
            <button className='search-button' onClick={()=>{setCount(count+1)}}>Search</button>
            <h2 className='weather-main'>{data.weather[0].main}</h2>
            <img className='weather-icon' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="Weather icon" />
            <h3 className='temperature'>Temperature: {((data.main.temp) - 273.15).toFixed(2)} °C</h3>
            <h3 className='feels-like'>Feels like: {((data.main.feels_like) - 273.15).toFixed(2)} °C</h3>
            <h3 className='humidity'>Humidity: {data.main.humidity}%</h3>
            <h3 className='wind-speed'>Wind speed: {(data.wind.speed * 3.6).toFixed(2)} km/h</h3>
            <h3 className='wind-direction'>Wind direction: {getCardinalDirection(data.wind.deg)}</h3>
            <h3 className='temp-min'>Min temp: {(data.main.temp_min - 273.15).toFixed(2)} °C</h3>
            <h3 className='temp-max'>Max temp: {(data.main.temp_max - 273.15).toFixed(2)} °C</h3>
          </div>
        )}
      </div>
    </>
  );
}
