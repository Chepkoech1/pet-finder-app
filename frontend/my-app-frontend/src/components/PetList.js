import React from 'react';
 

function PetList(props) {
  return (
    <div className="pet-list">
      {props.pets.map(pet => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
}

export default PetList;
