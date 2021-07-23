import { Link } from "react-router-dom";

const RecipeNav = () => {
  return (
    <nav>
      <div className="nav-wrapper blue accent-2">
        <ul className="left hide-on-med-and-down">
          <li>
            <Link to="/recipes">Add</Link>
          </li>
          <li>
            <Link to="/recipes/modify">Modify</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default RecipeNav;
