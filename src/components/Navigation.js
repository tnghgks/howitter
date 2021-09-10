import React from "react";
import { Link } from "react-router-dom";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = ({ userObj }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} size="2x" />
          <div>{userObj.displayName}의 Profile</div>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
