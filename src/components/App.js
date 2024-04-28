

import React, { useState, useEffect } from 'react';
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('No data found', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);




  return (
    <div>
         {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Data Fetching From API</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default App
