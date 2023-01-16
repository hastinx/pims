import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'
const MasterLayout = ({ children }) => {
    return (
        <>
            <div className="sb-nav-fixed">
                <Header />
                <div id="layoutSidenav">
                    <Navbar />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                                {children}
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MasterLayout