import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Pokedex from './components/pokedex/Pokedex';

function App() {
  return (
    <div className="App">
      
  <Router>
  <div className="container">
<Switch>
  <Route path="/"exact component={Home}></Route> 
  <Route path="/view-poke/:id" component={Pokedex}></Route>
</Switch>  
</div>
</Router>

    </div>
  );
}

export default App;
