import React from 'react';

const Filter = ({ handleFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre"
        onChange={(e) => handleFilterChange('title', e.target.value)}
      />
      <input
        type="number"
        placeholder="Filtrer par note"
        onChange={(e) => handleFilterChange('rating', e.target.value)}
      />
    </div>
  );
};

export default Filter;
