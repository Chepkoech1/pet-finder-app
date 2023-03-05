// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import "../App.css";

// const URL = "https://pet-finder-q9h3.onrender.com/pets";

// export default function Pets() {
//   const [pets, setPets] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [param, setParam] = useState("name");
  

//   useEffect(() => {
//     axios
//       .get(URL)
//       .then((resp) => {
//         setPets(resp.data);
//         console.log(resp.data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   function handleSearch() {
//     let newArray = [...pets];
//     if (param === "name") {
//       let name_results = newArray.filter((item) => {
//         return item.name.toLowerCase().includes(searchValue.toLowerCase());
//       });
//       if (name_results.length > 0) {
//         setPets(name_results);
//       } else {
//         alert("No results");
//       }
//     } else if (param === "breed") {
//       let breed_results = newArray.filter((item) => {
//         return item.breed.toLowerCase().includes(searchValue.toLowerCase());
//       });
//       if (breed_results.length > 0) {
//         setPets(breed_results);
//       } else {
//         alert("No results");
//       }
//     }
//   }

//   function handleParam(evt) {
//     console.log(evt.target.value);
//     if (evt.target.value === "Name") {
//       setParam("name");
//     } else if (evt.target.value === "Breed") {
//       setParam("breed");
//     }
//   }

//   let petsList = pets.map((p) => {
//     return (
//       <div className="card" key={p.id}>
//         <img src={p.image} alt="pictur" />
//         <span>
//           <h4>Name: {p.name}</h4>
//           <h4 className="pet-id">Age:{p.age}</h4>
//         </span>
//         <h5>Breed: {p.breed}</h5>
//       </div>
//     );
//   });
//   const handlePetSubmit = (event) => {
//     event.preventDefault();
  
//     const newPet = {
//       name: petName,
//       type: petType,
//     };
  
//     fetch('/api/pets', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newPet)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('New pet saved to database:', data);
//       // Add code here to update your UI with the new pet
//     })
//     .catch(error => console.error('Error saving pet:', error));
//   };
  

//   return (
//     <div>
//       <header id="search_bar">
//         <button
//           onClick={() => {
//             window.location.reload();
//           }}
//           id="back_btn"
//         >
//           Back
//         </button>
//         <span id="search_span">
//           <select
//             onChange={(e) => {
//               handleParam(e);
//             }}
//           >
//             <option>Name</option>
//             <option>Breed</option>
//           </select>
//           <input
//             onChange={(e) => {
//               setSearchValue(e.target.value);
//             }}
//             type="text"
//             id="search-input"
//             placeholder="Search.."
//             value={searchValue}
//           />
//           <button
//             onClick={(e) => {
//               handleSearch();
//             }}
//             id="search-btn"
//           >
//             Search
//           </button>
//         </span>
//       </header>
//       <div className="pets ">{petsList}</div>
//     </div>
//   );
// }
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css";

const URL = "https://pet-finder-q9h3.onrender.com/pets";

export default function Pets() {
  const [pets, setPets] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchBy, setSearchBy] = useState("name");

  useEffect(() => {
    axios
      .get(URL)
      .then((resp) => {
        setPets(resp.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleSearch() {
    let newArray = [...pets];
    let filteredPets = newArray.filter((item) => {
      return item[searchBy].toLowerCase().includes(searchValue.toLowerCase());
    });
    if (filteredPets.length > 0) {
      setPets(filteredPets);
    } else {
      alert("No results");
    }
  }

  function handleSearchBy(evt) {
    setSearchBy(evt.target.value.toLowerCase());
  }

  function handleReset() {
    axios
      .get(URL)
      .then((resp) => {
        setPets(resp.data);
        setSearchValue("");
        setSearchBy("name");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  let petsList = pets.map((pet) => (
    <div className="card" key={pet.id}>
      <img src={pet.image} alt="pet" />
      <span>
        <h4>Name: {pet.name}</h4>
        <h4 className="pet-id">Age: {pet.age}</h4>
      </span>
      <h5>Breed: {pet.breed}</h5>
    </div>
  ));

  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");

  const handlePetSubmit = (event) => {
    event.preventDefault();

    const newPet = {
      name: petName,
      breed: petBreed,
    };

    fetch("https://pet-finder-q9h3.onrender.com/pets", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPet)
    })
    .then(response => response.json())
    .then(data => {
      console.log('New pet saved to database:', data);
      // Add code here to update your UI with the new pet
      newPetElement.innerHTML = `
    <h2>${data.name}</h2>
    <p>Breed: ${data.breed}</p>
    <p>Age: ${data.age}</p>
    <p>Gender: ${data.gender}</p>
  `;
    })
    .catch(error => console.error('Error saving pet:', error));

    setPetName("");
    setPetBreed("");
  };

  return (
    <div>
      <header id="search_bar">
        <button id="back_btn" onClick={handleReset}>Back</button>
        <span id="search_span">
          <select id="search_by" onChange={handleSearchBy}>
            <option value="name">Name</option>
            <option value="breed">Breed</option>
          </select>
          <input
            type="text"
            id="search-input"
            placeholder="Search.."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button id="search-btn" onClick={handleSearch}>
            Search
          </button>
        </span>
      </header>
      <div className="pets">{petsList}</div>
      <form onSubmit={handlePetSubmit}>
        <h3>Add a new pet:</h3>
        <label htmlFor="petName">Name:</label>
        <input
          type="text"
          id="petName"onChange={(e) => setPetName(e.target.value)}
          value={petName}
          required
          />
          <label htmlFor="petBreed">Breed:</label>
          <input
          type="text"
          id="petBreed"
          onChange={(e) => setPetBreed(e.target.value)}
          value={petBreed}
          required
          />
          <button type="submit">Add Pet</button>
          </form>
          </div>
          );
          }
          

          
          
          
          
          
          
         
