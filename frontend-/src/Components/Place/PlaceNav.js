import { Link } from "react-router-dom";

const PlaceNav = () => {
  return (
    <nav>
      <div className="nav-wrapper blue accent-2">
        <ul className="left hide-on-med-and-down">
          <li>
            <Link to="/places">Add</Link>
          </li>
          <li>
            <Link to="/places/modify">Modify</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PlaceNav;
