import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>EARTHINTRUDERS</h1>
      {data ? (
        data.map((item, index) => (
          <div key={index}>
            <p>Nombre: {item.nombre}</p>
            <p>OtroDato: {item.fecha}</p>
          </div>
        ))
      ) : (
        <p>Puntuaciones</p>
      )}
    </div>
  );
}

export default App;
