import { Link } from "react-router-dom";

const PlayerNav = () => {
  return (
    <nav>
      <div className="nav-wrapper blue accent-2">
        <ul className="left hide-on-med-and-down">
          <li>
            <Link to="/players">Add</Link>
          </li>
          <li>
            <Link to="/players/modify">Modify</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PlayerNav;
