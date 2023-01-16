
import './App.css';
import Login from './views/login/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productionflow from './views/content/flow_diagram';
import Processoverview from './views/content/process/overview';
import Mainwellheadpadb from './views/content/process/mudi_pad_b';
import Mainwellheadpada from './views/content/process/mudi_pad_a/wellhead';
import Mainwellheadpadc from './views/content/process/mudi_pad_c';
import PadA from './views/content/pad-a';
import AlarmWellheadW1 from './views/content/process/alarm';
import Home from './views/content/overview';
import ChartGrafik from './views/content/report';
import Maintestseparator from './views/content/process/mudi_pad_a/test-separator/Maintestseparator';




function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/production-flow" element={<Productionflow />} />
        <Route path="/process/overview" element={<Processoverview />} />
        <Route path="/process/mudipad-a/wellhead" element={<Mainwellheadpada />} />
        <Route path="/process/mudipad-a/test-separator" element={<Maintestseparator />} />
        <Route path="/process/mudipad-b/wellhead" element={<Mainwellheadpadb />} />
        <Route path="/process/mudipad-c/wellhead" element={<Mainwellheadpadc />} />
        <Route path="/pada" element={<PadA />} />
        <Route path="/process/alarm" element={<AlarmWellheadW1 />} />
        <Route path="/report/chart" element={<ChartGrafik />} />



        {/* <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
        <Route path="/inventory" element={<><Navbar /><Inventory /></>} /> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
