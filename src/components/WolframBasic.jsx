import React, { useState, useEffect } from "react";

const Wolfram = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inputQuery, setInputQuery] = useState(""); // State to hold input query
  const APP_ID = "YOUR_APP_ID"; // Replace with your actual Wolfram Alpha App ID

  const fetchData = (query) => {
    fetch(`http://api.wolframalpha.com/v1/simple?appid=${APP_ID}&i=${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.text(); 
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    
    fetchData(inputQuery);
  }, []); 

  const handleInputChange = (event) => {
    setInputQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(inputQuery);
  };

  return (
    <div>
      <h1>Wolfram Alpha Query</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputQuery}
          onChange={handleInputChange}
          placeholder="Enter Query"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>Error: {error}</p>}
      {data && <div dangerouslySetInnerHTML={{ __html: data }} />}
    </div>
  );
};

export default Wolfram;
