import { MdSearch } from "react-icons/md";

const SearchBar = ({ handleSearch }) => {
    return (
        <div className="search-bar">
            <MdSearch className="search-bar__icon" size="1.3em" />
            <input
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                type="text"
                placeholder="Search note..."
            />
        </div>
    );
};

export default SearchBar;
