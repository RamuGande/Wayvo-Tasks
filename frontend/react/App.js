import{ BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome'
import Todo from './components/Todo'
import Api from './components/Api'
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" index element={<Welcome/>}/>
          <Route path = "/api" element={<Api/>}/>
          <Route path="/login"  element = {<Login/>}/>
          <Route path = "/signup"  element = {<Signup/>} />
          <Route path = "/todo" element = {<Todo/>}/>
        </Routes>
      </Router>
    </>
   
   
  );
}

export default App;
