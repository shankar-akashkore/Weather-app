import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css';
import { useState } from 'react';

export default function Search(){
    let [city,setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "95111dec9489bbb36ae00c95bcc2fd9d";

    let getWeatherinfo = async () => {
        let respone = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonrespone = await respone.json();
        console.log(jsonrespone);
        let result = {
            temp : jsonrespone.main.temp,
            tempMin : jsonrespone.main.temp_min,
            tempMax : jsonrespone.main.temp_max,
            humidity : jsonrespone.main.humidity,
            feelsLike : jsonrespone.main.feels_like,
            weather : jsonrespone.weather[0].description,
        };
        console.log(result);
    }

    let handlecity = (event) => {
        setCity(event.target.value);
    }

    let handlesumbit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherinfo();

    }
    return(
        <div className='Searchbox'>
            <h3>HarHari</h3>
            <form onSubmit={handlesumbit}>
            <TextField className="box1" id="outlined-basic" label="Search for Weather" variant="outlined" required value={city} onChange={handlecity}/>
            <br></br> <br></br>
            <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}