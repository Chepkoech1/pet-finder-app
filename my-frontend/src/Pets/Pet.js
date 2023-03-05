import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css";

const URL = "https://pet-finder-q9h3.onrender.com/pets";

export default function Pets() {
  const [pets, setPets] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [param, setParam] = useState("name");

  useEffect(() => {
    axios
      .get(URL)
      .then((resp) => {
        setPets(resp.data);
        console.log(resp.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleSearch() {
    let newArray = [...pets];
    if (param === "name") {
      let name_results = newArray.filter((item) => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      if (name_results.length > 0) {
        setPets(name_results);
      } else {
        alert("No results");
      }
    } else if (param === "breed") {
      let breed_results = newArray.filter((item) => {
        return item.breed.toLowerCase().includes(searchValue.toLowerCase());
      });
      if (breed_results.length > 0) {
        setPets(breed_results);
      } else {
        alert("No results");
      }
    }
  }

  function handleParam(evt) {
    console.log(evt.target.value);
    if (evt.target.value === "Name") {
      setParam("name");
    } else if (evt.target.value === "Breed") {
      setParam("breed");
    }
  }

  let petsList = pets.map((p) => {
    return (
      <div className="card" key={p.id}>
        <img src={p.image} alt="pictur" />
        <span>
          <h4>Name: {p.name}</h4>
          <h4 className="pet-id">Age:{p.age}</h4>
        </span>
        <h5>Breed: {p.breed}</h5>
      </div>
    );
  });

  return (
    <div>
      <header id="search_bar">
        <button
          onClick={() => {
            window.location.reload();
          }}
          id="back_btn"
        >
          Back
        </button>
        <span id="search_span">
          <select
            onChange={(e) => {
              handleParam(e);
            }}
          >
            <option>Name</option>
            <option>Breed</option>
          </select>
          <input
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            type="text"
            id="search-input"
            placeholder="Search.."
            value={searchValue}
          />
          <button
            onClick={(e) => {
              handleSearch();
            }}
            id="search-btn"
          >
            Search
          </button>
        </span>
      </header>
      <div className="pets ">{petsList}</div>
    </div>
  );
}