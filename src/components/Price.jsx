import React, { useState, useEffect } from 'react';

const SearchComponent = (props) => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [filteredPrice, setFilteredPrice] = useState([]);
  useEffect(() => {
    const found = props.payload.filter(({ price_sqm }) => {
      const totalPrice = `${price_sqm}`;
      return totalPrice.includes(selectedPrice);
    });
    if (!selectedPrice.length) {
      setFilteredPrice([]);
    } else {
      setFilteredPrice(found);
    }
  }, [selectedPrice]);

  return (
    <>
      <form>
        <input
          className='search-box'
          size='40'
          type='text'
          placeholder='Year Constructed'
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value || '')}
        />
        <ul>
          {filteredPrice.map((f, idx) => (
            <li key={idx}>{`${f.price_sqm}`}</li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default SearchComponent;
