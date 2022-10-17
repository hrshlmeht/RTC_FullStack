import './App.css';
import {BrowserRouter,Route , Navigate } from 'react-router-dom';
import {Routes} from 'react-router-dom';
import  Home  from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';


const isAuth = true ;
function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      </Routes>
      <GuestRoute path= "/Authenticate">
      element={<Authenticate />}
      </GuestRoute>
   {/* <Routes>
      <Route path='/register' element={<Register/>} />
      </Routes>
      <Routes>
      <Route path='/login' element={<Login/>} />
      </Routes>
  */}  
    </BrowserRouter>
  );
}


const GuestRoute = ({children, ...rest}) =>{
return(
       <Routes {...rest} 
        render = {({location}) => {
         return isAuth ? (
          <Navigate to ={
            {
              pathname: '/rooms',
              state: {from : location}
            }
          }/>
         )
         :
         (
          children
         );
        
        }}
      ></Routes>
     );
};

export default App;
