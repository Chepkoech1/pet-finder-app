import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LogIn />}/>
      <Route path='/signUp' element={<SignUp />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
  );
}

export default App;