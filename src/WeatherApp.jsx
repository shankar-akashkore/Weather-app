import Search from "./Search"
import Info from './Info'
import { useState } from "react"

export default function WeatherApp(){
    const [Weather,setWeather] = useState(
        {
            city : "Pune",
            feelsLike : 24.34,
            temp : 25.05,
            tempMin : 25.05,
            tempMax : 26.06,
            humidity : 49,
            weather : "Haze"
        }
    );

    let updateinfo = (newinfo) => {
        setWeather(newinfo);
    }
    return(
        <div>
            <Search updateinfo={updateinfo}/>
            <Info info={Weather} />
        </div>
    )
}