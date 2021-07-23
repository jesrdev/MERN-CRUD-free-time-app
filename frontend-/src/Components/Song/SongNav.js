import { Link } from "react-router-dom";

const SongNav = () => {
  return (
    <nav>
      <div className="nav-wrapper blue accent-2">
        <ul className="left hide-on-med-and-down">
          <li>
            <Link to="/songs">Add</Link>
          </li>
          <li>
            <Link to="/songs/modify">Modify</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SongNav;
