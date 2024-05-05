import './App.css';
import Header from './Header';
import Menu from './Menu';
import MDReader from './components/MDReader';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <div className="container">
      <MDReader file="index.md" />
      </div>

    </div>
  );
}

export default App;
