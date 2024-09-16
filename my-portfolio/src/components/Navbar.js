import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-end">
      <div class="navbar-nav">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <a class="nav-link active text-light " aria-current="page" href="#">
            Home
          </a>
        </Link>
        <Link to={"/Skill"} style={{ textDecoration: "none" }}>
          <a class="nav-link active text-light " aria-current="page" href="#">
            Skill
          </a>
        </Link>
        <Link to={"/Profile"} style={{ textDecoration: "none" }}>
          <a class="nav-link active text-light " aria-current="page" href="#">
            Profile
          </a>
        </Link>
        <Link to={"/Work"} style={{ textDecoration: "none" }}>
          <a class="nav-link active text-light " aria-current="page" href="#">
            Work
          </a>
        </Link>
        <Link to={"/Contact"} style={{ textDecoration: "none" }}>
          <a class="nav-link active text-light" aria-current="page" href="#">
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
