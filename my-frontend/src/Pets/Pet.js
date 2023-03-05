import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://edit-0rk8.onrender.com/pets";

export default function AllPets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setPets(res.data);
    });
  }, []);

  return (
    <div className="container">
      {pets.map((pet) => {
        return (
          <div key={pet.id} className="card">
            <center>
              {" "}
              <img src={pet.image} alt="..." style={{ width: "20em" , marginTop: "1em" }} />
            </center>

            <h4>NAME:{pet.name}</h4>
            <h4>BREED: {pet.breed}</h4>
            <p>DESCRIPTION: {pet.description}</p>
          </div>
        );
      })}
    </div>
  );
}