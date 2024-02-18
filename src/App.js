import React,{useState} from 'react'
import axios from 'axios'

function App(){
  const [data,setData] = useState({})
  const [location,setlocation]= useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ab342694c666e0ab780f8173bd4dd4d5`;

  const searchLocation = (event)=>{
    if(event.key === 'Enter'){
    axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
    })
    setlocation('');
   }
  }
  return (
    <div className="App">
      <div className='search'>
        <input 
          value={location}
          onChange={event=>setlocation(event.target.value)} 
          onKeyPress={searchLocation}
          placeholder='Enter location'
          type="text"/>
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ?<h1>{data.main.temp.toFixed()}ºF</h1> : <h1>0ºF</h1>}
          </div>
          <div className='description'>
            {data.weather ?<span>{data.weather[0].main}</span>: 'cloud'}
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            {data.main ?<p className='bold'>{data.main.feels_like.toFixed()}ºF</p> :"0ºF"}
            <p className='bold'>feels like</p>
          </div>
          <div className='humility'>
            {data.main ? <p className='bold'>{data.main.humidity}</p>:'0'}
            <p className='bold'>humidity</p>
          </div>
          <div className='wind'>
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : '0'}
            <p className='bold'>windspeed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App