
import './App.css';
import { Route, Routes} from 'react-router-dom';
import LoginForm from './components/LoginForm'

function App() {
  return (
    
    <main>
     <Routes>
      <Route path='/' element={LoginForm}/>
     </Routes>
    </main>
    
  );
}

export default App;
