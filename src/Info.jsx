import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './Info.css';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Info({info}){
    const URL = "/images/Haze.jpg";
    const HOT = "/images/sun.jpg";
    const COLD = "/images/cold.jpg";
    const Rain = "/images/rain2.jpg";
    return(
        <div className='InfoBox'>
        <div className='Box'>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity > 80
             ? Rain 
             : info.temp > 15
             ? HOT 
             : COLD}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{
                info.humidity > 80
                    ? <ThunderstormIcon />
                    : info.temp > 15
                    ? <SunnyIcon />
                    : <AcUnitIcon/>
            }
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <div>Temperature = {info.temp}&deg;c</div>
            <div>Humidity = {info.humidity}</div>
            <div>Min temp = {info.tempMin}&deg;c</div>
            <div>Max temp = {info.tempMax}&deg;c</div>
            <div>The Weather can be describe as <i>{info.weather}🌪️</i> and feels like {info.feelsLike}&deg;c</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </div>
    )
}