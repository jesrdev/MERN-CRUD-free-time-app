import { Link } from "react-router-dom";

const PeopleNav = () => {
  return (
    <nav>
      <div className="nav-wrapper blue accent-2">
        <ul className="left hide-on-med-and-down">
          <li>
            <Link to="/peoples">Add</Link>
          </li>
          <li>
            <Link to="/peoples/modify">Modify</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PeopleNav;
