import React from 'react';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import Navbar from '../../../../components/Navbar';
import Pfd from './Pfd';
import Testseparator from './Testseparator';
import Wellheada from '../mudi_pad_a/wellhead/Wellheada';
import Wellheadb1 from '../mudi_pad_b/Wellheada';
import Wellheadb2 from '../mudi_pad_b/Wellheadb';
import Wellheadc1 from '../mudi_pad_c/Wellheada';
import Wellheadc2 from '../mudi_pad_c/Wellheadb';

function Processoverview() {
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
                    <Wellheadb1 />
                  </div>
                  <div className="col-xl-4 col-md-4">
                    <Wellheadc1 />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-xl-4 col-md-4">
                    <Testseparator />
                  </div>
                  <div className="col-xl-4 col-md-4">
                    <Wellheadb2 />
                  </div>
                  <div className="col-xl-4 col-md-4">
                    <Wellheadc2 />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-xl-4 col-md-4">
                    <Pfd />
                  </div>
                  <div className="col-xl-4 col-md-4">
                    <Wellheadb2 />
                  </div>
                  <div className="col-xl-4 col-md-4">
                    <Wellheadc2 />
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

export default Processoverview;
