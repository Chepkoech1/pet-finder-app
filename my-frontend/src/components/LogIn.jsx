import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
    <section className='logIn'>
        <h2>Log In to upload your pets</h2>
        <form action="#">
            <input type="email" placeholder='Enter Email address' />
            <input type="password" placeholder='Enter Password'/>
        </form>
        <p>Do not have an account yet?<Link to="/signup">Sign Up</Link></p>

    </section>
  )
}

export default LogIn