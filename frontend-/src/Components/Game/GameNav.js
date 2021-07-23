import { Link } from "react-router-dom";

const GameNav = () => {
  return (
    <nav>
      <div className="nav-wrapper blue accent-2">
        <ul className="left hide-on-med-and-down">
          <li>
            <Link to="/games">Add</Link>
          </li>
          <li>
            <Link to="/games/modify">Modify</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default GameNav;
