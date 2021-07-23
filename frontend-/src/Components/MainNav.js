import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav>
      <div className="nav-wrapper blue accent-2">
        <ul className="left hide-on-med-and-down">
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/shows">Shows and blogs</Link>
          </li>
          <li>
            <Link to="/songs">Guitar Songs</Link>
          </li>
          <li>
            <Link to="/peoples">People to Follow</Link>
          </li>
          <li>
            <Link to="/places">Places</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/games">Videogames</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
