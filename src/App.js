import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import { useState } from 'react';
import Contact from './page/Contact';
import Services from './page/Services';
import Reference from './page/Reference';

function App() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

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
    <div className="App">
      <Header />
      <Menu onItemClick={handleItemClick} activePage={selectedItem}/>
      <div className="container">
        {content}
      </div>
    </div>
  );
}

export default App;
