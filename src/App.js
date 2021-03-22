import './App.css';
import CardList from './components/CardList';
import Data from './Data';

function App() {
  return (
    <div className="App">
     <CardList products={Data}/>
    </div>
  );
}

export default App;
