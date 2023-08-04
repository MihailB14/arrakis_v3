import logo from './logo.svg';
import Bond from './components/Bond'
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
      <Bond>
      </Bond>
      <Bond>
      </Bond>
      <Bond>
      </Bond>
      </div>
    </div>

  );
}

export default App;
