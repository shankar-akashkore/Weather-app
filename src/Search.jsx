import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css';
import { useState } from 'react';
import Info from './Info';

export default function Search({updateinfo}){
    let [city,setCity] = useState("");
    let [error,seterror] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "95111dec9489bbb36ae00c95bcc2fd9d";

    let getWeatherinfo = async () => {
        try{
            let respone = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonrespone = await respone.json();
            console.log(jsonrespone);
            let result = {
            city : city,
            temp : jsonrespone.main.temp,
            tempMin : jsonrespone.main.temp_min,
            tempMax : jsonrespone.main.temp_max,
            humidity : jsonrespone.main.humidity,
            feelsLike : jsonrespone.main.feels_like,
            weather : jsonrespone.weather[0].description,
        };
        console.log(result);
        return result;
        } catch(err) {
            throw err;
        }
    }

    let handlecity = (event) => {
        setCity(event.target.value);
    }

    let handlesumbit = async(event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getWeatherinfo();
            updateinfo(newinfo);
        } catch(err) {
            seterror(true);
        }

    }
    return(
        <div className='Searchbox'>
            <h3>Search for Weather</h3>
            <form onSubmit={handlesumbit}>
            <TextField className="box1" id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handlecity}/>
            <br></br> <br></br>
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p>No such place exist!</p>}
            </form>
        </div>
    )
}