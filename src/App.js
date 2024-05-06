import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import { useState, useEffect } from 'react';
import Contact from './page/Contact';
import Services from './page/Services';
import Reference from './page/Reference';
import Footer from './components/Footer';

function App() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isLoading, setIsLoading] = useState(true)

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); // Zde můžete nastavit čas, po kterém bude animace odebrána

    return () => clearTimeout(timer);
  }, [selectedItem])
  
   let content;
    if (selectedItem === 0) {
      content = <Services />;
    } else if (selectedItem === 1) {
      content = <Reference />;
    } else if (selectedItem === 2) {
      content = <Contact />;
    } else {
      content = <Services />;
    }
   
  return (
    <div className={`App ${isLoading ? 'loading' : ''}`}>
      <Header isLoading={isLoading}/>
      <Menu onItemClick={handleItemClick} activePage={selectedItem}/>
      <div className={`container ${isLoading ? 'animate' : ''}`}>
        {content}
      </div>
      <Footer />
    </div>
  );
}

export default App;
