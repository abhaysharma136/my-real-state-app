import { Card, CardActions, CardContent, Typography } from "@mui/material";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import "./properties.css";

export default function DisplayProperties({result,item}) {
  

  
  // let filterArr = item.filter((ele1) => ele1?.city === result.location);

  return (
    <div>
      <div className="flex properties-container">
        {item.map((ele) => (
          <Properties ele={ele} />
        ))}
      </div>
    </div>
  );
}

function Properties({ ele }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <img src={ele.images} alt={ele.name} className="properties-image" />
        <CardContent>
          <div>
            <span className="location-price">{ele.price}</span>/month
          </div>

          <Typography variant="h6" component="div" color="black">
            {ele.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ele.Address}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="icon-conatiner flex">
            <SingleBedIcon /> {ele.bed} Beds
          </div>
          <div className="icon-conatiner flex">
            <BathtubOutlinedIcon /> {ele.bathroom} Bathrooms
          </div>
          <div className="icon-conatiner flex">
            <StraightenOutlinedIcon /> {ele.dimensions} m<sup>2</sup>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
