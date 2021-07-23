import { Link } from "react-router-dom";

const ShowNav = () => {
  return (
    <nav>
      <div className="nav-wrapper blue accent-2">
        <ul className="left hide-on-med-and-down">
          <li>
            <Link to="/shows">Add</Link>
          </li>
          <li>
            <Link to="/shows/modify">Modify</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ShowNav;
