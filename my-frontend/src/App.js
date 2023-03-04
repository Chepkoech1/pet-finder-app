import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

function App() {
  return (
   <main>
      <Routes>
        <Route path='/' element={<LogIn />}/>
        <Route path='/signUp' element={<SignUp />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
   </main>
  );
}

export default App;
