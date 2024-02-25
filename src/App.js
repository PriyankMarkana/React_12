import logo from './logo.svg';
import './App.css';
import Posts from './Posts';
import Comments from './Comments';
import Albums from './Albums';
import Todos from './Todos';
import Users from './Users';
import Home from './Home';
import Photos from './Photos';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
   <>
 
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/posts" element={ <Posts/> } />
        <Route path="/comments" element={ <Comments/> } />
        <Route path="/albums" element={ <Albums/> } />
        <Route path="/photos" element={ <Photos/> } />
        <Route path="/todos" element={ <Todos/> } />
        <Route path="/users" element={ <Users/> } />
      </Routes>
    </div>
   </>
  );
}

export default App;
