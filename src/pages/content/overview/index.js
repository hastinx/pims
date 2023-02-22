import React, { useEffect, useState } from 'react'
import MasterLayout from '../../../components/Layout';
import Loader from '../../../utils/loader';
import Blocksummary from './Blocksummary';
import Overview from './Overview';
import Timeline from './Timeline';
import Wellsummary from './Wellsummary';
function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setLoading(false)
        }, 3000)
    });
    return (
        <>
            {loading ? <Loader /> : <MasterLayout>
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
            }

        </>

    )
}

export default Home