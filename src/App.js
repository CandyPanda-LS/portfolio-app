import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="main-content">
          <h1 className="text-3xl  underline">
            Hello world!
          </h1>

        </div>
      )}

    </div>
  );
}

export default App;
