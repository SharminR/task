import React, { useState, useEffect } from 'react';

const SearchComponent = (props) => {
  const [selected, setSelected] = useState('');
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    const found = props.payload.filter(({ street, street_number }) => {
      const address = `${street_number} ${street}`;
      return address.toLowerCase().includes(selected.toLowerCase());
    });
    if (!selected.length) {
      setFiltered([]);
    } else {
      setFiltered(found);
    }
  }, [selected]);

  return (
    <div>
      <form>
        <input
          className='search-box'
          size='40'
          type='text'
          placeholder='Address'
          value={selected}
          onChange={(e) => setSelected(e.target.value || '')}
        />
        <ul>
          {filtered.map((f, idx) => (
            <li key={idx}>{`${f.street_number} ${f.street}`}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default SearchComponent;
