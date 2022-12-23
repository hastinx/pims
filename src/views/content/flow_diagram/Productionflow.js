import React from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import imgFlow from './img/process-flow2.png';
function Productionflow() {
    return (
        <>
            <div className='sb-nav-fixed'>
                <Header />
                <div id="layoutSidenav">
                    <Navbar />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                                <div className='row mt-4'>
                                    <div className="col-xl-12 col-md-12">
                                        <div className="card border-danger">
                                            <div className="card-header fw-semibold text-center text-white bg-danger">
                                                SIMPLIFIED PRODUCTION FLOW DIAGRAM
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <img className='img-fluid' src={imgFlow} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Productionflow