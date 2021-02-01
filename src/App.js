import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Address from './components/Address';
import Price from './components/Price';
import BuiltYear from './components/BuiltYear';
import Size from './components/Size';
import Room from './components/Room';

const useData = (props) => {
  const [payload, getPayload] = useState(null);

  useEffect(() => {
    const body = { who_rules: 'kodit.io' };
    const URL =
      'https://cc677kr6sc.execute-api.eu-central-1.amazonaws.com/data';
    Axios.post(URL, body)
      .then(({ data }) => getPayload(data))
      .catch((e) => {
        throw e;
      });
  }, []);

  return payload;
};

function App() {
  const payload = useData();
  if (!payload) return null;

  return (
    <div>
      <Address payload={payload}></Address>
      <Price payload={payload}></Price>
      <BuiltYear payload={payload}></BuiltYear>
      <Size payload={payload}></Size>
      <Room payload={payload}></Room>
    </div>
  );
}

export default App;
