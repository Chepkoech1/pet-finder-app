// import React from "react";

// export default function NavBar() {
//   return (
//     <div>
//       <nav class="navbar bg-body-tertiary">
//         <div class="container-fluid">
//           <a href="d" class="navbar-brand">
//             Navbar
//           </a>

//           <form class="d-flex" role="search">
//             <input
//               class="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button class="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </nav>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function NavBar() {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");

  const handlePetSubmit = (event) => {
    event.preventDefault();
    console.log("Pet submitted: ", petName, petType);
    // Add code here to save the new pet to your database
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a href="d" className="navbar-brand">
            Navbar
          </a>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <form className="d-flex" onSubmit={handlePetSubmit}>
            <input
              className="form-control me-2"
              type="text"
              placeholder="Pet Name"
              value={petName}
              onChange={(event) => setPetName(event.target.value)}
            />
            <input
              className="form-control me-2"
              type="text"
              placeholder="Pet Type"
              value={petType}
              onChange={(event) => setPetType(event.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">
              Add Pet
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
