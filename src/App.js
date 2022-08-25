import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home'; 
import Liked from './pages/liked';
import Details from './pages/details';
function App() {
  if (!localStorage.getItem('liked')) {
    localStorage.setItem('liked',JSON.stringify([]))
  }
  if (!localStorage.getItem('shop')) {
    localStorage.setItem('shop',JSON.stringify([]))
  }
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
