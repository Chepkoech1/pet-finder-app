import '../App.css'
import { useState } from "react";
import { Redirect } from 'react-router-dom';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let handleLogin = () => {
        let responseObj = {
          email,
          password,
        };
        console.log(responseObj);
        if (responseObj.email !== null && responseObj.password !== null) {
          fetch("https://pet-finder-q9h3.onrender.com/login", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(responseObj),
          }).then((response) => {
            console.log(response);
            if (response.status !== 200) {
              alert("error")
            }
            else if (response.status === 200){
              alert("success")
              setIsLoggedIn(true);
            }
          });
        } else {
          console.log("error");
        }
      }

      if (isLoggedIn) {
        return <Redirect to="/pets" />;
      }

    return ( 
        <>
        <form id="login_form">
         <h1>Login</h1>
         <label>Email</label>
         <input
          onChange={(e) => {
          setEmail(e.target.value);
          }}
          type="email"
          value={email}
          ></input>
         <label>Password</label>
         <input
          onChange={(e) => {
          setPassword(e.target.value);
          }} 
          type="password"></input>
         <button onClick={(e)=>{
            e.preventDefault();
            handleLogin();
         }}>Login</button>
           
         <h4>Don't have an account yet ?<span>sign up</span></h4>
        </form>
        </>
     );
}

export default Login;