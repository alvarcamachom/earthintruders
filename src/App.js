import React, { useState, useEffect } from 'react';

function App() {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMerchants(data);
        console.log("Data fetched successfully");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>EARTHINTRUDERS</h1>
      <ul>
        {merchants.map(merchant => (
          <li key={merchant.id}>{merchant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
