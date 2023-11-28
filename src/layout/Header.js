import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">FRIEND DATABASE</div>
      <div className="header-link">
        <NavLink className="header-link" to="/" exact>
          <div className="header-link-text">Home Page</div>
        </NavLink>

        <NavLink className="header-link" to="/friends">
          <div className="header-link-text">Friends List</div>
        </NavLink>

        <NavLink className="header-link" to="/friends/add">
          <div className="header-link-text">Add Friend</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
