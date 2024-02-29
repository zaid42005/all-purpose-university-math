// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Quadratic from './pages/Quadratic';
import RREF from './pages/RREF'
import './App.css'
import Logic from './pages/Logic'
import Calc1 from './pages/Calc1';


const App = () => {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quadratic" element={<Quadratic />} />
        <Route path = "/rref" element= {<RREF/>}/>
        <Route path = "/calc1" element = {<Calc1/>}/>
        <Route path = "/logic" element = {<Logic/>}/>
      </Routes>
    </Router>
  );
};

export default App;
