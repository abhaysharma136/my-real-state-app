import React from "react";
import Filter from "../../components/Filter/filter";
import './home.css';

export default function Home() {
  return (
    <div className="homepage-container flex">
      <h1>Search properties to rent</h1>
      <Filter/>
    </div>
  );
}
