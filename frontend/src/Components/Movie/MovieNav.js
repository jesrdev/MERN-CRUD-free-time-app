import { Link } from "react-router-dom";

const MovieNav = () => {
  return (
    <nav>
      <div className="nav-wrapper blue accent-2">
        <ul className="left hide-on-med-and-down">
          <li>
            <Link to="/movies">Add</Link>
          </li>
          <li>
            <Link to="/movies/modify">Modify</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MovieNav;
