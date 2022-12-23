import React from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header'
import Navbar from '../../components/Navbar';
import Blocksummary from './overview/Blocksummary';
import Overview from './overview/Overview';
import Timeline from './overview/Timeline';
import Wellsummary from './overview/Wellsummary';
function Home() {
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
                                        <Timeline />
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className="col-xl-6 col-md-6">
                                        <Overview />
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <Blocksummary />
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className="col-xl-12 col-md-6">
                                        <Wellsummary />
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

export default Home