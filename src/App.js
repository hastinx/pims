
import './App.css';
import Login from './views/login/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './views/content/Home';
import Productionflow from './views/content/flow_diagram/Productionflow';
import Processoverview from './views/content/process/overview/Processoverview';
import Mainwellheadpadb from './views/content/process/mudi_pad_b/Mainwellheadpadb';
import Mainwellheadpada from './views/content/process/mudi_pad_a/wellhead/Mainwellheadpada';
import Mainwellheadpadc from './views/content/process/mudi_pad_c/Mainwellheadpadc';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />


        <Route path="/home" element={<Home />} />
        <Route path="/production-flow" element={<Productionflow />} />
        <Route path="/process/overview" element={<Processoverview />} />
        <Route path="/process/mudipad-a/wellhead" element={<Mainwellheadpada />} />
        <Route path="/process/mudipad-b/wellhead" element={<Mainwellheadpadb />} />
        <Route path="/process/mudipad-c/wellhead" element={<Mainwellheadpadc />} />
        {/* <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
        <Route path="/inventory" element={<><Navbar /><Inventory /></>} /> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
