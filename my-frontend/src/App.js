import { Switch,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/Landingpage/LandingPage';
import Login from './pages/LogIn';
// import Pets from './pets/pets';
import Pets from './Pets/Pet';  
import SignUp from './pages/SignUp';

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
        <Route exact path='/'><LandingPage/></Route>
        <Route path='/sign-up'><SignUp/></Route>
      

      </Switch>
    </div>
  );
}

export default App;