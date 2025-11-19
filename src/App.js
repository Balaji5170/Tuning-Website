import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route, Link , Navigate } from 'react-router-dom';
import ProtectedRoute from "./Components/ProtectedRoute";
import ScrollToTop from "./Components/ScrollToTop"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
