import React, { useState, useEffect } from 'react';

const SearchComponent = (props) => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [filteredRoom, setFilteredRoom] = useState([]);
  useEffect(() => {
    const found = props.payload.filter(({ room_count }) => {
      const totalRoom = `${room_count}`;
      return totalRoom.includes(selectedRoom);
    });
    if (!selectedRoom.length) {
      setFilteredRoom([]);
    } else {
      setFilteredRoom(found);
    }
  }, [selectedRoom]);

  return (
    <>
      <form>
        <input
          className='search-box'
          size='40'
          type='text'
          placeholder='Number of Rooms'
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value || '')}
        />
        <ul>
          {filteredRoom.map((f, idx) => (
            <li key={idx}>{`${f.room_count}`}</li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default SearchComponent;
