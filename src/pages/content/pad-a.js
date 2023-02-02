import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Wellhead1 from './process/mudi_pad_a/wellhead/m1'
import Wellhead10 from './process/mudi_pad_a/wellhead/m10'
import Wellhead11 from './process/mudi_pad_a/wellhead/m11'



const PadA = () => {
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
                                        <Wellhead1 />
                                    </div>
                                    <div className="col-xl-4 col-md-4">
                                        <Wellhead10 />
                                    </div>
                                    <div className="col-xl-4 col-md-4">
                                        <Wellhead11 />
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

export default PadA