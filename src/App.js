import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import "./App.css"

function App(props) {
  return (
    <div className="App">
      <Header />
      <Menu />
      <div className="container">
      {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default App;
