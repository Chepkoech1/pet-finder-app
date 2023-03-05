import { Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './pages/LogIn';
// import Pets from './pets/pets';
import Pets from './Pets/Pet';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/pets'>
          <Pets/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;