<<<<<<< HEAD
import React, { useState } from "react";

const Dashboard = () => {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to add a new pet
  const addPet = (pet) => {
    setPets([...pets, pet]);
  };

  // Function to update a pet's details
  const updatePet = (id, updatedPet) => {
    const updatedPets = pets.map((pet) =>
      pet.id === id ? updatedPet : pet
    );
    setPets(updatedPets);
  };

  // Function to remove a pet
  const removePet = (id) => {
    const filteredPets = pets.filter((pet) => pet.id !== id);
    setPets(filteredPets);
  };

  // Function to filter pets by name or breed
  const filteredPets = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Add a new pet</h2>
      <AddPetForm addPet={addPet} />

      <h2>My pets</h2>
      <PetList pets={filteredPets} updatePet={updatePet} removePet={removePet} />

      <h2>Available pets</h2>
      <AvailablePetList />

      <h2>Search for a pet</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

const AddPetForm = ({ addPet }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPet = { id: Date.now(), name, breed };
    addPet(newPet);
    setName("");
    setBreed("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Breed"
        value={breed}
        onChange={(event) => setBreed(event.target.value)}
      />
      <button type="submit">Add pet</button>
    </form>
  );
};

const PetList = ({ pets, updatePet, removePet }) => {
  return (
    <ul>
      {pets.map((pet) => (
        <li key={pet.id}>
          <input
            type="text"
            value={pet.name}
            onChange={(event) =>
              updatePet(pet.id, { ...pet, name: event.target.value })
            }
          />
          <input
            type="text"
            value={pet.breed}
            onChange={(event) =>
              updatePet(pet.id, { ...pet, breed: event.target.value })
            }
          />
          <button onClick={() => removePet(pet.id)}>Remove pet</button>
        </li>
      ))}
    </ul>
  );
};

const AvailablePetList = () => {
  // Code to fetch available pets from the server
  return (
    <ul>
      <li>Available pet 1</li>
      <li>Available pet 2</li>
      <li>Available pet 3</li>
    </ul>
  );
};

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
type="text"
placeholder="Search by name or breed"
value={searchTerm}
onChange={(event) => setSearchTerm(event.target.value)}
/>
  )}

  export default Dashboard
    
=======
import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
>>>>>>> 18ef7cfa5f1197bc769ddd494f9040939a1efbab
