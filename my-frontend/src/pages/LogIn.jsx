import React, { useState } from 'react'
import { Link } from 'react-router-dom'

let json = {};
const LogIn = () => {
  const [details, setDetails] = useState(json);

  const handleLogIn = (e)=> {
    e.preventDefault();
    fetch('/logIn', {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
            "Content-Type": "Application/json"
        }
    })
    .then(res => res.json())
    .then(res => console.log(res))

    console.log("data submited")
  }

  const handleDetails = (e)=>{
    let key = e.target.name;
    let value = e.target.value;
    json[key] = value;
    setDetails(json);
    console.log(details);

  }

  return (
    <section className='logIn'>
        <h2>Log In to upload your pets</h2>
        <form action="#" onSubmit={handleLogIn}>
            <input type="email" name='Email' placeholder='Enter Email address' onChange={handleDetails}/>
            <input type="password" name='Password' placeholder='Enter Password' onChange={handleDetails}/>
            <button  type='submit'>Log In</button>
        </form>
        <p>Do not have an account yet?<Link to="/signup">Sign Up</Link></p>

    </section>
  )
}

export default LogIn