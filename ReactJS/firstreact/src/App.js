
import './App.css';
import Header from './components/Header.jsx';
import Product from './components/Product.jsx'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Product></Product>
      </div>
    </div>
  );
}

export default App;
