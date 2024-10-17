import { useContext } from "react";
import { SearchContext } from "../../../contexts";

const SearchTask = () => {
  const { search, setSearch } = useContext(SearchContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-task">
      <form>
        <input
          type="text"
          placeholder="search task..."
          value={search}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchTask;
