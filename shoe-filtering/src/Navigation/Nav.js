import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <button className="icon-button" aria-label="Favorites">
          <FiHeart className="nav-icons" />
        </button>
        <button className="icon-button" aria-label="Cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </button>
        <button className="icon-button" aria-label="Profile">
          <AiOutlineUserAdd className="nav-icons" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
