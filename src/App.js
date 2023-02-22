
import './App.css';
import Login from './pages/login/Login';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Productionflow from './pages/content/flow_diagram';
import Mainwellheadpadb from './pages/content/process/mudi_pad_b/wellhead_b_2';
import Mainwellheadpada from './pages/content/process/mudi_pad_a/wellhead';
import Mainwellheadpadc from './pages/content/process/mudi_pad_c/wellhead';
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
import MaintestseparatorB from './pages/content/process/mudi_pad_b/test-separator/Maintestseparator';
import MaintestseparatorC from './pages/content/process/mudi_pad_c/test-separator/Maintestseparator';
import WellSummary from './pages/content/well_summary';
import WaterDisposalPump from './pages/content/process/mudi_pad_c/waterDisposalPump';
import ProcessFlowDiagram from './pages/content/process_flow_diagram';
import Peta from './pages/content/peta';
import PowerDistribution from './pages/content/power_distribution';
import WellheadB1 from './pages/content/process/mudi_pad_b/wellhead_b_1';

export const Session = createContext({
  name: "",
  isLogin: 0
})

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/production-flow" element={<Productionflow />} />
        <Route path="/production-flow/mudi" element={<ProcessFlowDiagram />} />
        <Route path="/peta-lokasi" element={<Peta />} />
        <Route path="/power-distribution" element={<PowerDistribution />} />
        <Route path="/process/mudipad-a/wellhead" element={<Mainwellheadpada />} />
        <Route path="/process/mudipad-a/test-separator" element={<Maintestseparator />} />
        <Route path="/process/mudipad-a/process-flow-diagram" element={<PfdPadA />} />
        <Route path="/process/mudipad-b/wellhead" element={<Mainwellheadpadb />} />
        <Route path="/process/mudipad-b/wellhead-b1" element={<WellheadB1 />} />
        <Route path="/process/mudipad-b/test-separator" element={<MaintestseparatorB />} />
        <Route path="/process/mudipad-c/wellhead" element={<Mainwellheadpadc />} />
        <Route path="/process/mudipad-c/test-separator" element={<MaintestseparatorC />} />
        <Route path="/process/mudipad-c/water-disposal" element={<WaterDisposalPump />} />
        <Route path="/pada" element={<PadA />} />
        <Route path="/process/well-summary" element={<WellSummary />} />
        {/* <Route path="/process/alarm" element={<AlarmWellheadW1 />} /> */}
        {/* <Route path="/report/chart/mudipad-a" element={<ChartMudiPadA />} /> */}
        {/* <Route path="/report/chart/mudipad-b" element={<ChartMudiPadB />} /> */}
        {/* <Route path="/report/chart/mudipad-c" element={<ChartMudiPadC />} /> */}

        {/* <Route path="/report/data/mudipad-a" element={<ReportMudiPadA />} /> */}



        {/* <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
        <Route path="/inventory" element={<><Navbar /><Inventory /></>} /> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
