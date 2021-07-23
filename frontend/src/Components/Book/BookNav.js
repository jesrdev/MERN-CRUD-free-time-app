import { Link } from "react-router-dom";

const BookNav = () => {
  return (
    <nav>
      <div className="nav-wrapper blue accent-2">
        <ul className="left hide-on-med-and-down">
          <li>
            <Link to="/books">Add</Link>
          </li>
          <li>
            <Link to="/books/modify">Modify</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BookNav;
