import './App.css';
import Header from './Header';
import MDReader from './components/MDReader';

function App() {
  return (
    <div className="App">
      <Header />
      <MDReader file="index.md" />

    </div>
  );
}

export default App;
