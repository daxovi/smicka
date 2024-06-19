import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import "./MDReader.css"

const MDReader = (props) => {
    const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Načtení markdown souboru, můžeš použít například Fetch API
    fetch('/content/' + props.file)
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Chyba při načítání markdownu:', error));
  }, []);

  return (
    <div className="markdown-container"> {/* Container pro markdown */}
      <ReactMarkdown>{markdown}</ReactMarkdown> {/* Vykreslení markdownu */}
    </div>
  );
}

export default MDReader;