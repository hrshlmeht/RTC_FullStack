import './App.css';
import {BrowserRouter,Route } from 'react-router-dom';
import {Routes} from 'react-router-dom';
import  Home  from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Routes>
      <Route path='/register' element={<Register/>} />
      </Routes>
      <Routes>
      <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
