import './App.css';
import {BrowserRouter as Router,Route,Routes, Switch} from 'react-router-dom'
import Home from './components/Home';
import ListPokeComponent from './components/ListPokeComponent';
import Pokedex from './components/pokedex/Pokedex';

function App() {
  return (
    <div className="App">
  <Router>
    


  <div className="container">
<Switch>
  <Route path="/"exact component={Home}></Route> 
  <Route path="/pokes" component={ListPokeComponent}></Route>
  <Route path="/view-poke/:id" component={Pokedex}></Route>
  <ListPokeComponent/>

</Switch>
<ListPokeComponent/>
     
</div>






</Router>
    </div>
  );
}

export default App;
