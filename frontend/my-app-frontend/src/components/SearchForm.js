import React, { useState } from 'react'

function SearchForm({ setPets }) {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/pets?name=${name}&breed=${breed}`)
      .then((response) => response.json())
      .then((data) => setPets(data));
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pet name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Pet breed"
        value={breed}
        onChange={(event) => setBreed(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
