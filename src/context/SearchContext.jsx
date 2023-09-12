// SearchContext.js
import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchData, setSearchData] = useState([]);

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
