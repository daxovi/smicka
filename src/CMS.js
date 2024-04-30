import React, { useState, useEffect } from 'react';

const CMS = () => {
  const [jsonContent, setJsonContent] = useState(null);

  useEffect(() => {
    fetch('/data.json') // Načte JSON soubor přímo ze složky public
      .then(response => response.json())
      .then(data => setJsonContent(data))
      .catch(error => console.error('Error:', error));
  }, []);

  if (!jsonContent) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Editor</h1>
      <pre>{JSON.stringify(jsonContent, null, 2)}</pre>
    </div>
  );
};

export default CMS;
