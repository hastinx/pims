import React from 'react'
import MasterLayout from '../../../components/Layout';
import Blocksummary from './Blocksummary';
import Overview from './Overview';
import Timeline from './Timeline';
import Wellsummary from './Wellsummary';
function Home() {
    return (
        <MasterLayout>
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
        </MasterLayout>
    )
}

export default Home