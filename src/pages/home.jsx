import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
return (
    <div className="navigation">
      
    <Link
      to="/form"
    >
      <h3>FORM</h3>
    </Link>
    <Link
      to="/report"
    >
      <h3>Report</h3>
    </Link>
    <Link
      to="/audio"
    >
      <h3>Audio</h3>
    </Link>

  </div>
)
}
export default Home;