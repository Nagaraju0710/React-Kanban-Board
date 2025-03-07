import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import KanbanBoard from './Components/KanbanBoard';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/kanban" element={<KanbanBoard/>} />
      </Routes>
    </div>
  );
}

export default App;
