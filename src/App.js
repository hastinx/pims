
import './App.css';
import Login from './pages/login/Login';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Productionflow from './pages/content/flow_diagram';
import Processoverview from './pages/content/process/overview';
import Mainwellheadpadb from './pages/content/process/mudi_pad_b';
import Mainwellheadpada from './pages/content/process/mudi_pad_a/wellhead';
import Mainwellheadpadc from './pages/content/process/mudi_pad_c';
import PadA from './pages/content/pad-a';
import AlarmWellheadW1 from './pages/content/process/alarm';
import Home from './pages/content/overview';
import Maintestseparator from './pages/content/process/mudi_pad_a/test-separator/Maintestseparator';
import PfdPadA from './pages/content/process/mudi_pad_a/process-flow-diagram';
import ChartMudiPadA from './pages/content/report/mudi_pad_a/chart';
import ChartMudiPadB from './pages/content/report/mudi_pad_b/chart';
import ChartMudiPadC from './pages/content/report/mudi_pad_c/chart';
import ReportMudiPadA from './pages/content/report/mudi_pad_a/reporting';
import { createContext } from 'react';
import UserPermission from './utils/Session';

export const Session = createContext({
  name: "",
  isLogin: 0
})

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Login />} />

        <Route path="/home" element={<UserPermission><Home /></UserPermission>} />
        <Route path="/production-flow" element={<Productionflow />} />
        <Route path="/process/overview" element={<Processoverview />} />
        <Route path="/process/mudipad-a/wellhead" element={<Mainwellheadpada />} />
        <Route path="/process/mudipad-a/test-separator" element={<Maintestseparator />} />
        <Route path="/process/mudipad-a/process-flow-diagram" element={<PfdPadA />} />
        <Route path="/process/mudipad-b/wellhead" element={<Mainwellheadpadb />} />
        <Route path="/process/mudipad-c/wellhead" element={<Mainwellheadpadc />} />
        <Route path="/pada" element={<PadA />} />
        <Route path="/process/alarm" element={<AlarmWellheadW1 />} />
        <Route path="/report/chart/mudipad-a" element={<ChartMudiPadA />} />
        <Route path="/report/chart/mudipad-b" element={<ChartMudiPadB />} />
        <Route path="/report/chart/mudipad-c" element={<ChartMudiPadC />} />

        <Route path="/report/data/mudipad-a" element={<ReportMudiPadA />} />



        {/* <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
        <Route path="/inventory" element={<><Navbar /><Inventory /></>} /> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
