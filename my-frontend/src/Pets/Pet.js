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
      if(name_results.length > 0) {
        setPets(name_results);
      }
      else{
        alert("No results")
      }
    } else if (param === "breed") {
      let breed_results = newArray.filter((item) => {
        return item.breed.toLowerCase().includes(searchValue.toLowerCase());
      });
      if(breed_results.length > 0) {
        setPets(breed_results);
      }
      else{
        alert("No results")
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

  function handleDelete(id) {
  // console.log(value);
  fetch(`https://pet-finder-q9h3.onrender.com/pets`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  }

  function handleUpdate(e){
    console.log(e.target.textContent)
    let breed = e.target.parentElement.previousElementSibling
    let name = e.target.parentElement.previousElementSibling.previousElementSibling.querySelector(':first-child')
    let age = e.target.parentElement.previousElementSibling.previousElementSibling.querySelector(':last-child')

    let breedValue = breed.textContent
    let nameValue = name.textContent
    let ageValue = age.textContent

    if(e.target.textContent === 'edit'){
      breed.contentEditable = true
      name.contentEditable = true
      age.contentEditable = true
      e.target.innerHTML = ''
      e.target.textContent = 'done'
    }
    else if(e.target.textContent === 'done'){
      breed.contentEditable = false
      name.contentEditable = false
      age.contentEditable = false   
      e.target.innerHTML = ''
      e.target.textContent = 'edit'
      let newObj = {
        name: nameValue,
        breed:breedValue,
        age: ageValue,
        }
    
        console.log(newObj);
        fetch(`https://pet-finder-q9h3.onrender.com/pets`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newObj),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.log(error);
        });
    }

    console.log(nameValue + ": " + ageValue + breedValue)

  }
    

  // console.log(pets);

  let petsList = pets.map((p) => {
    return (
      <div className="individual_pet" key={p.id}>
        <img src={p.image} alt="picture" />
        <span>
          <h4>Name: {p.name}</h4>
          <h4 className="pet-id">{p.age}</h4>
        </span>
        <h5>Breed: {p.breed}</h5>
        <span id="iconsSpan">
          <i
          onClick={(e)=>{
            handleUpdate(e)
          }}
           className="material-icons">edit</i>
          <i onClick={()=>{
            handleDelete(p.id)
          }} className="material-icons">delete</i>
        </span>
      </div>
    );
  });



  return (
    <div>
      <header id="search_bar">
        <button onClick={()=>{
          window.location.reload();
        }} id="back_btn">Back</button>
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
      <div className="pets ">
        {petsList}
        {/* {pets.map((newpets) => {
          return (
            <div key={newpets.id}>
              <div>
                <DisplayPets
                  name={newpets.name}
                  age={newpets.age}
                  species={newpets.species}
                  breed={newpets.breed}
                  image={newpets.image}
                  gender={newpets.gender}
                  description={newpets.description}
                  id={newpets.id}
                />
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { redirect, Redirect } from "react-router";
// import { useHistory } from "react-router";

// import "../App.css";

// const URL = "https://pet-finder-q9h3.onrender.com/pets";

// export default function Pets() {
//   const [pets, setPets] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [searchBy, setSearchBy] = useState("name");
// // redirect("/")
//   useEffect(() => {
//     axios
//       .get(URL)
//       .then((resp) => {
//         setPets(resp.data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   function handleSearch() {
//     let newArray = [...pets];
//     let filteredPets = newArray.filter((item) => {
//       return item[searchBy].toLowerCase().includes(searchValue.toLowerCase());
//     });
//     if (filteredPets.length > 0) {
//       setPets(filteredPets);
//     } else {
//       alert("No results");
//     }
//   }

//   function handleSearchBy(evt) {
//     setSearchBy(evt.target.value.toLowerCase());
//   }

//   function handleReset() {
//     axios
//       .get(URL)
//       .then((resp) => {
//         setPets(resp.data);
//         setSearchValue("");
//         setSearchBy("name");
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }

//   let petsList = pets.map((pet) => (
//     <div className="card" key={pet.id}>
//       <img src={pet.image} alt="pet" />
//       <span>
//         <h4>Name: {pet.name}</h4>
//         <h4 className="pet-id">Age: {pet.age}</h4>
//       </span>
//       <h5>Breed: {pet.breed}</h5>
//     </div>
//   ));

//   const [petName, setPetName] = useState("");
//   const [petBreed, setPetBreed] = useState("");

//   const handlePetSubmit = (event) => {
//     event.preventDefault();

//     const newPet = {
//       name: petName,
//       breed: petBreed,
//     };

//     fetch("https://pet-finder-q9h3.onrender.com/pets", {
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
//   //     newPetElement.innerHTML = `
//   //   <h2>${data.name}</h2>
//   //   <p>Breed: ${data.breed}</p>
//   //   <p>Age: ${data.age}</p>
//   //   <p>Gender: ${data.gender}</p>
//   // `;
//     })
//     .catch(error => console.error('Error saving pet:', error));

//     setPetName("");
//     setPetBreed("");
//   };

//   return (
//     <div>
//       <header id="search_bar">
//         <button id="back_btn" onClick={handleReset}>Back</button>
//         <span id="search_span">
//           <select id="search_by" onChange={handleSearchBy}>
//             <option value="name">Name</option>
//             <option value="breed">Breed</option>
//           </select>
//           <input
//             type="text"
//             id="search-input"
//             placeholder="Search.."
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//           />
//           <button id="search-btn" onClick={handleSearch}>
//             Search
//           </button>
//           {/* <button onClick={(e)=>{
//             e.preventDefault
//             history.push("/")
//           }}>LOGOUT</button> */}

//         </span>
//       </header>
//       <div className="pets">{petsList}</div>
//       <form onSubmit={handlePetSubmit}>
//         <h3>Add a new pet:</h3>
//         <label htmlFor="petName">Name:</label>
//         <input
//           type="text"
//           id="petName"onChange={(e) => setPetName(e.target.value)}
//           value={petName}
//           required
//           />
//           <label htmlFor="petBreed">Breed:</label>
//           <input
//           type="text"
//           id="petBreed"
//           onChange={(e) => setPetBreed(e.target.value)}
//           value={petBreed}
//           required
//           />
//           <button type="submit">Add Pet</button>
//           </form>
//           </div>
//           );
//           }
          

          
          
          
          
          
          
         
