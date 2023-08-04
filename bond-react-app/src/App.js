import logo from './logo.svg';
import BondList from './components/BondList'
import Filter from './components/Filter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "Header">

      </div>
      <div className = "Filters">
        <Filter></Filter>
      </div>
      <div className = "Content">
      <BondList>
      </BondList>
      </div>
    </div>

  );
}

export default App;
