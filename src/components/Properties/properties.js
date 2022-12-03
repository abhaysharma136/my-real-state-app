import {Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import './properties.css';


export default function DisplayProperties(){
    const data=[{
        "name":"Palm Harbor",
        "images":"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?cs=srgb&dl=pexels-pixabay-280222.jpg&fm=jpg",
        "price":"2,095",
        "Address":"2699 Green Valley, Highland Lake, FL",
        "bed":"3",
        "bathroom":"2",
        "dimensions":"5x7"
    },
    {
        "name":"Beverly Springfield",
        "images":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlZo727G2zM_cq9fG5PcVHs4tyclyog_IaA&usqp=CAU",
        "price":"2,700",
        "Address":"2821 Lake Sevilla, Palm Harbour, TX",
        "bed":"4",
        "bathroom":"2",
        "dimensions":"6x7.5"
    },
    {
        "name":"Fauler Ave",
        "images":"https://s3images.zee5.com/wp-content/uploads/2021/08/individual-houses-villas.jpg",
        "price":"4,500",
        "Address":"909 Woodland St, Michigan, IN",
        "bed":"4",
        "bathroom":"3",
        "dimensions":"8x10"
    },
    {
        "name":"Pike Ave",
        "images":"https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/luxury/spacious-villa-homes.jpg",
        "price":"4,500",
        "Address":"3201 Pike Street, California, CA",
        "bed":"3",
        "bathroom":"2",
        "dimensions":"8x12"
    },
    {
        "name":"Bensen Street",
        "images":"https://i0.wp.com/www.collegestationhomes.com/wp-content/uploads/2021/08/Looking-for-a-Home-in-College-Station.jpeg?ssl=1",
        "price":"2,500",
        "Address":"4956 Benson Street, Clarence, NY",
        "bed":"3",
        "bathroom":"3",
        "dimensions":"11x12"
    },
    {
        "name":"mapple drive",
        "images":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QB3cAICEQkhXswLtQFaWa1iwfCLFBjMmMA&usqp=CAU",
        "price":"1,700",
        "Address":"4137 Saint Clair street, Jaskson, MP",
        "bed":"4",
        "bathroom":"3",
        "dimensions":"8x10"
    },
    {
        "name":"Wilson park",
        "images":"https://images.moneycontrol.com/static-mcnews/2017/05/real-estate-Luxury-home.jpg?impolicy=website&width=770&height=431",
        "price":"3,500",
        "Address":"2903 Wilson Street, Callaway, MS",
        "bed":"4",
        "bathroom":"3",
        "dimensions":"8x10"
    },
    {
        "name":"Thrash Trail",
        "images":"https://cdn.britannica.com/05/157305-004-53D5D212.jpg",
        "price":"2,500",
        "Address":"4845 Tgrash Trail, Tyler, TX",
        "bed":"4",
        "bathroom":"3",
        "dimensions":"8x11"
    },
    {
        "name":"Cabell Avenue",
        "images":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-VwyHmVV-dk7JNLvSL3sI1xFBlcvyfZKSJCGrDtapArbhQllRXS93hcHo5wSppCUD-o&usqp=CAU",
        "price":"3,500",
        "Address":"4554 Cabelle Avenue, Herndon, VG",
        "bed":"4",
        "bathroom":"2",
        "dimensions":"11x10"
    }]
    return(
        <div className="flex properties-container">
            {data.map((ele)=>(
                <Properties ele={ele}/>
            ))}
        </div>
    )
}


 function Properties({ele}) {
  return <div>
    <Card sx={{ maxWidth: 345 }}>
      <img src={ele.images} alt={ele.name} className="properties-image"/>
      <CardContent>
        <div><span className="location-price">{ele.price}</span>/month</div>
          
        
        <Typography variant="h6" component="div" color="black">
          {ele.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ele.Address}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="icon-conatiner flex"><SingleBedIcon/> {ele.bed} Beds</div>
        <div className="icon-conatiner flex"><BathtubOutlinedIcon/> {ele.bathroom} Bathrooms</div>
        <div className="icon-conatiner flex"><StraightenOutlinedIcon/> {ele.dimensions} m<sup>2</sup></div>
      </CardActions>
    </Card>
  </div>;
}
