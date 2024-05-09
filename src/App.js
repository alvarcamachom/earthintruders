import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001');
        setMerchants(response.data);
        console.log("Data fetched successfully");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Merchants</h1>
      <ul>
        {merchants.map(merchant => (
          <li key={merchant.id}>{merchant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
