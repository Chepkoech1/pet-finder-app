import React from "react";
import { useHistory } from "react-router-dom";

function LandingPage() {
  const history = useHistory();

  return (
    <div className="Landingpage">
      <div className="landingpagebtn">
        <button className="btn-1" onClick={() => history.push("/login")}>
          LOGIN
        </button>
        <button className="btn-2" onClick={() => history.push("/sign-up")}>
          SIGNUP
        </button>
      </div>
      <div>
        {/* Other design */}
        <h1>Thank you for visiting our website</h1>
       
        
      </div>
    </div>
  );
}

export default LandingPage