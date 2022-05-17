import './App.css';
import AppHeaderMain from "./components/AppHeaderMain";

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import SimGenerator from './pages/SimGenerator';
import Legal from './pages/Legal';

function App() {
  return (
    <div className="comtainer">
      <AppHeaderMain/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sim-generator" element={<SimGenerator />}/>
        <Route path="/legal" element={<Legal/>}/>
      </Routes>
    </div>
  )
}

export default App;
