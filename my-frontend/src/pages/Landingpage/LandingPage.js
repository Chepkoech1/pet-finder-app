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
        <p className="paragraph">
          We are excited to have you here. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed ut ultrices odio. Donec posuere
          dapibus erat, eu convallis elit tempor vitae. Vestibulum vestibulum
          nunc sed tristique facilisis.
        </p>
      </div>
    </div>
  );
}

export default LandingPage