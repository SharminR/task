import React, { useState, useEffect } from 'react';

const SearchComponent = (props) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [filteredSize, setFilteredSize] = useState([]);
  useEffect(() => {
    const found = props.payload.filter(({ size_sqm }) => {
      const totalSize = `${size_sqm}`;
      return totalSize.includes(selectedSize);
    });
    if (!selectedSize.length) {
      setFilteredSize([]);
    } else {
      setFilteredSize(found);
    }
  }, [selectedSize]);

  return (
    <>
      <form>
        <input
          className='search-box'
          size='40'
          type='text'
          placeholder='Size'
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value || '')}
        />
        <ul>
          {filteredSize.map((f, idx) => (
            <li key={idx}>{`${f.size_sqm}`}</li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default SearchComponent;
