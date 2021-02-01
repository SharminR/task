import React, { useState, useEffect } from 'react';

const SearchComponent = (props) => {
  const [selectedYear, setSelectedYear] = useState('');
  const [filteredYear, setFilteredYear] = useState([]);
  useEffect(() => {
    const found = props.payload.filter(({ built_year }) => {
      const totalYear = `${built_year}`;
      return totalYear.includes(selectedYear);
    });
    if (!selectedYear.length) {
      setFilteredYear([]);
    } else {
      setFilteredYear(found);
    }
  }, [selectedYear]);

  return (
    <div>
      <form>
        <input
          className='search-box'
          size='40'
          type='text'
          placeholder='Built Year'
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value || '')}
        />
        <ul>
          {filteredYear.map((f, idx) => (
            <li key={idx}>{`${f.built_year}`}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default SearchComponent;
