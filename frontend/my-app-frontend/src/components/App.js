import React, { useState, useEffect } from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import PetList from './PetList';
// import './styles/App.css';

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('/api/pets')
      .then((response) => response.json())
      .then((data) => setPets(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchForm setPets={setPets} />
      <PetList pets={pets} setPets={setPets} />
    </div>
  );
};

export default App;
