import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  
    return (
      <React.Fragment>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-dark navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              KonnichaNews
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
                <li className="nav-item"> <Link className="nav-link" aria-current="page" to="entertainment">Entertainment</Link></li>
                <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/general">General</Link></li>
                <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
                <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
                <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
                <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
              </ul>
            </div>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form> */}
          </div>
        </nav>
      </React.Fragment>
    );
 
}
