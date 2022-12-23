import React from 'react';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import Navbar from '../../../../components/Navbar';
import Wellheada from './Wellheada';
import Wellheadb from './Wellheadb';
import Wellheadc from './Wellheadc';
import Wellheadd from './Wellheadd';
import Wellheade from './Wellheade';
import Wellheadf from './Wellheadf';

function Mainwellheadpadc() {
  return (
    <>
      <div className="sb-nav-fixed">
        <Header />
        <div id="layoutSidenav">
          <Navbar />
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <div className="row mt-4">
                  <div className="col-xl-4 col-md-4">
                    <Wellheada />
                  </div>
                  <div className="col-xl-4 col-md-4">
                    <Wellheadb />
                  </div>
                  <div className="col-xl-4 col-md-4">
                    <Wellheadc />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-xl-4 col-md-4">
                    <Wellheadd />
                  </div>
                  <div className="col-xl-4 col-md-4">
                    <Wellheade />
                  </div>
                  <div className="col-xl-4 col-md-4">
                    <Wellheadf />
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainwellheadpadc;
