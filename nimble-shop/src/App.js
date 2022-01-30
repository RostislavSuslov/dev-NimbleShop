import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import ProductsList from './components/ProductsList/ProductsList';
 
function App() {
  return (
    <div className="App">
      <Header/>
      <ProductsList/>
    </div>
  );
}

export default App;
