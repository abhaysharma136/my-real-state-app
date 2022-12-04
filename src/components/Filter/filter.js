import { Button } from "@mui/material";
import React, { useState } from "react";
import DisplayProperties from "../Properties/properties";
import "./filter.css";
export default function Filter() {
  const data = [
    {
      name: "Palm Harbor",
      images:
        "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?cs=srgb&dl=pexels-pixabay-280222.jpg&fm=jpg",
      price: "2,095",
      Address: "2699 Green Valley, Highland Lake, FL",
      bed: "3",
      bathroom: "2",
      dimensions: "5x7",
      city: "FL",
      propertyType: "Flats",
      priceRange: "3",
    },
    {
      name: "Beverly Springfield",
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlZo727G2zM_cq9fG5PcVHs4tyclyog_IaA&usqp=CAU",
      price: "2,700",
      Address: "2821 Lake Sevilla, Palm Harbour, TX",
      bed: "4",
      bathroom: "2",
      dimensions: "6x7.5",
      city: "TX",
      propertyType: "Apartments",
      priceRange: "4",
    },
    {
      name: "Fauler Ave",
      images:
        "https://s3images.zee5.com/wp-content/uploads/2021/08/individual-houses-villas.jpg",
      price: "4,500",
      Address: "909 Woodland St, Michigan, IN",
      bed: "4",
      bathroom: "3",
      dimensions: "8x10",
      city: "IN",
      propertyType: "Houses",
      priceRange: "5",
    },
    {
      name: "Pike Ave",
      images:
        "https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/luxury/spacious-villa-homes.jpg",
      price: "4,500",
      Address: "3201 Pike Street, California, CA",
      bed: "3",
      bathroom: "2",
      dimensions: "8x12",
      city: "CA",
      propertyType: "Houses",
      priceRange: "5",
    },
    {
      name: "Bensen Street",
      images:
        "https://i0.wp.com/www.collegestationhomes.com/wp-content/uploads/2021/08/Looking-for-a-Home-in-College-Station.jpeg?ssl=1",
      price: "2,500",
      Address: "4956 Benson Street, Clarence, NY",
      bed: "3",
      bathroom: "3",
      dimensions: "11x12",
      city: "NY",
      propertyType: "Flats",
      priceRange: "3",
    },
    {
      name: "mapple drive",
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QB3cAICEQkhXswLtQFaWa1iwfCLFBjMmMA&usqp=CAU",
      price: "1,700",
      Address: "4137 Saint Clair street, Jaskson, MP",
      bed: "4",
      bathroom: "3",
      dimensions: "8x10",
      city: "MP",
      propertyType: "Apartments",
      priceRange: "3",
    },
    {
      name: "Wilson park",
      images:
        "https://images.moneycontrol.com/static-mcnews/2017/05/real-estate-Luxury-home.jpg?impolicy=website&width=770&height=431",
      price: "3,500",
      Address: "2903 Wilson Street, Callaway, FL",
      bed: "4",
      bathroom: "3",
      dimensions: "8x10",
      city: "FL",
      propertyType: "Houses",
      priceRange: "4",
    },
    {
      name: "Thrash Trail",
      images: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg",
      price: "2,500",
      Address: "4845 Tgrash Trail, Tyler, TX",
      bed: "4",
      bathroom: "3",
      dimensions: "8x11",
      city: "TX",
      propertyType: "Apartments",
      priceRange: "3",
    },
    {
      name: "Cabell Avenue",
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-VwyHmVV-dk7JNLvSL3sI1xFBlcvyfZKSJCGrDtapArbhQllRXS93hcHo5wSppCUD-o&usqp=CAU",
      price: "3,500",
      Address: "4554 Cabelle Avenue, Herndon, VG",
      bed: "4",
      bathroom: "2",
      dimensions: "11x10",
      city: "VG",
      propertyType: "Houses",
      priceRange: "4",
    },
  ];

  const optionStyle = {
    fontWeight: "bold",
    border: "none",
  };

  const [location, setLocation] = useState("All");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("All");
  const [propType, setPropType] = useState("All");
  const result = {
    location: location,
    date: date,
    price: price,
    propType: propType,
  };

  const [item, setItem] = useState(data);
  function filterItem(firstFilter) {
    if (
      firstFilter.location !== "All" &&
      firstFilter.propType !== "All" &&
      firstFilter.price !== "All"
    ) {
      let filterArr1 = data.filter((ele1) => {
        return (
          ele1?.city === firstFilter.location &&
          ele1.propertyType === firstFilter.propType &&
          ele1.priceRange === firstFilter.price
        );
      });
      setItem(filterArr1);
    } else if (
      firstFilter.propType === "All" &&
      firstFilter.location !== "All" && firstFilter.price ==="All"
    ) {
      let filterArr1 = data.filter((ele1) => {
        return ele1?.city === firstFilter.location;
      });
      setItem(filterArr1);
    } else if (
      firstFilter.propType !== "All" &&
      firstFilter.location === "All" && firstFilter.price ==="All"
    ) {
      let filterArr1 = data.filter((ele1) => {
        return ele1.propertyType === firstFilter.propType;
      });
      setItem(filterArr1);
    }else if(firstFilter.propType === "All" &&
    firstFilter.location === "All" && firstFilter.price !=="All"){
      let filterArr1 = data.filter((ele1) => {
        return ele1.priceRange === firstFilter.price;
      });
      setItem(filterArr1);
    }else if(firstFilter.propType !== "All" &&
    firstFilter.location !== "All" && firstFilter.price ==="All"){
      let filterArr1 = data.filter((ele1) => {
        return (
          ele1?.city === firstFilter.location &&
          ele1.propertyType === firstFilter.propType
        );
      });
      setItem(filterArr1);
    }else if(firstFilter.propType !== "All" &&
    firstFilter.location === "All" && firstFilter.price !=="All"){
      let filterArr1 = data.filter((ele1) => {
        return (
          ele1.propertyType === firstFilter.propType &&
          ele1.priceRange === firstFilter.price
        );
      });
      setItem(filterArr1);
    }else if(firstFilter.propType === "All" &&
    firstFilter.location !== "All" && firstFilter.price !=="All"){
      let filterArr1 = data.filter((ele1) => {
        return (
          ele1?.city === firstFilter.location &&
          ele1.priceRange === firstFilter.price
        );
      });
      setItem(filterArr1);
    } else {
      setItem(data);
    }
  }
  return (
    <div>
      <div className="filter-container">
        <form className="filter-form">
          <div>
            <p>Location</p>
            <select
              id="property-location"
              style={optionStyle}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="All">All</option>
              <option value="NY">New York, USA</option>
              <option value="FL">Florida, USA</option>
              <option value="TX">Texas, USA</option>
              <option value="CA">California, USA</option>
              <option value="MP">Mississippi, USA</option>
              <option value="VG">Verginia, USA</option>
            </select>
          </div>
          <div>
            <p>When</p>
            <input
              type="text"
              placeholder="Select Move-in Date"
              style={optionStyle}
              onChange={(e) => setDate(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>
          <div>
            <p>Price</p>
            <select
              id="property-rent"
              style={optionStyle}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="All">All</option>
              <option value="1">Less then $500</option>
              <option value="2">$500-$1500</option>
              <option value="3">$1500-$2500</option>
              <option value="4">$2500-$4000</option>
              <option value="5">More then $4000</option>
            </select>
          </div>
          <div>
            <p>Property Type</p>
            <select
              id="property-type"
              style={optionStyle}
              onChange={(e) => setPropType(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Houses">Houses</option>
              <option value="Flats">Flats</option>
              <option value="Apartments">Apartments</option>
            </select>
          </div>
          <Button
            variant="contained"
            onClick={() => filterItem(result)}
            className="search-button"
          >
            Search
          </Button>
        </form>
      </div>
      <DisplayProperties result={result} item={item} />
    </div>
  );
}
