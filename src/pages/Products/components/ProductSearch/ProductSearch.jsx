import "./ProductSearch.scss";
import SearchIcon from "../../../../assets/icons/vector.svg";

const ProductSearch = ({ value, handleSearch }) => {
  return (
    <div className="search">
      <img
        src={SearchIcon}
        alt="search"
        className="search-icon"
      />
      <input
        type="text"
        value={value}
        onChange={handleSearch}
        className="search-input"
        placeholder="Search a product"
      />
    </div>
  );
};

export default ProductSearch;
