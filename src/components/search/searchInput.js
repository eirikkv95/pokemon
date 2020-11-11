import React from "react";

const searchInput = ({ handleChange, searchTerm }) => {
  return <input type="text" onChange={handleChange} value={searchTerm} />;
};

export default searchInput;
