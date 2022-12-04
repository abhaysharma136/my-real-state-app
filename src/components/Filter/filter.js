import { Button } from "@mui/material";
import React, { useState } from "react";
import { data } from "../data";
import DisplayProperties from "../Properties/properties";
import "./filter.css";
export default function Filter() {
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
      firstFilter.location !== "All" &&
      firstFilter.price === "All"
    ) {
      let filterArr1 = data.filter((ele1) => {
        return ele1?.city === firstFilter.location;
      });
      setItem(filterArr1);
    } else if (
      firstFilter.propType !== "All" &&
      firstFilter.location === "All" &&
      firstFilter.price === "All"
    ) {
      let filterArr1 = data.filter((ele1) => {
        return ele1.propertyType === firstFilter.propType;
      });
      setItem(filterArr1);
    } else if (
      firstFilter.propType === "All" &&
      firstFilter.location === "All" &&
      firstFilter.price !== "All"
    ) {
      let filterArr1 = data.filter((ele1) => {
        return ele1.priceRange === firstFilter.price;
      });
      setItem(filterArr1);
    } else if (
      firstFilter.propType !== "All" &&
      firstFilter.location !== "All" &&
      firstFilter.price === "All"
    ) {
      let filterArr1 = data.filter((ele1) => {
        return (
          ele1?.city === firstFilter.location &&
          ele1.propertyType === firstFilter.propType
        );
      });
      setItem(filterArr1);
    } else if (
      firstFilter.propType !== "All" &&
      firstFilter.location === "All" &&
      firstFilter.price !== "All"
    ) {
      let filterArr1 = data.filter((ele1) => {
        return (
          ele1.propertyType === firstFilter.propType &&
          ele1.priceRange === firstFilter.price
        );
      });
      setItem(filterArr1);
    } else if (
      firstFilter.propType === "All" &&
      firstFilter.location !== "All" &&
      firstFilter.price !== "All"
    ) {
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
    <div className="top-container flex">
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
      {item.length > 0 ? (
        <DisplayProperties result={result} item={item} />
      ) : (
        <h2>"Sorry no match found"</h2>
      )}
    </div>
  );
}
