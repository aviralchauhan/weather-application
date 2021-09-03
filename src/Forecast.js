import React,{useState} from 'react'
import './Forecast.css'
import ReactAnimatedWeather from 'react-animated-weather';

function Forecast({weather}) {
    const [Icons, setIcons] = useState();
    const iconMap = {
        'Clear': 'CLEAR_DAY',
        'Haze': 'FOG',
        'Clouds': 'CLOUDY',
        'Lclouds':'PARTLY_CLOUDY_DAY',
        'Rain': 'RAIN',
        'Snow': 'SNOW',
        'Fog': 'FOG',
        'Mist':'FOG'
      }
      
    const defaults = {
        color: 'white',
        size: 30,
        animate: true
      };
    return (
        <div className="upcoming">

               { weather && weather.list && weather.list.map((value , key) => {

                    console.log(value , key)
                    if(key == 0 || key%8 == 0){
                        
                         var iconCode = value && value.weather[0] && value.weather[0].main;
                       
                        console.log(iconCode)
                        let days = 
                        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        let a=value.dt * 1000;
                        var dateObject=new Date(a);
                        console.log(dateObject.getDate(), days[dateObject.getDay()])
                        return (
                            <div>
                             <ul>
                              <li className="upcomingForecast">
                                <span style={{fontStyle:"italic"}}>{days[dateObject.getDay()]} ,</span>
                                <span style={{fontStyle:"italic"}}>{dateObject.getDate()}</span><br />
                                <span style={{display: "inline-flex", marginTop:"5px"}}>{value.weather[0].main}
                                        <ReactAnimatedWeather
                                        icon={iconMap[iconCode]}
                                        color={defaults.color}
                                        size={defaults.size}
                                        animate={defaults.animate}
                                        />
                                </span>
                                <br />
                                <span>{Math.floor(value.main.temp)} °C</span>
                              </li>
                              </ul>
                            </div>)
                    }
                
                  
                 }) 
                }
            
               
        </div>
    )
}

export default Forecast
