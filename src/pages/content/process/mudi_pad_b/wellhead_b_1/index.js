import React from 'react'
import MasterLayout from '../../../../../components/Layout'
import Wellhead15 from './m15'
import Wellhead16 from './m16'
import Wellhead2a from './m2a'
import Wellhead4 from './m4'
import Wellhead5 from './m5'
import Wellhead9 from './m9'

const WellheadB1 = () => {
    return (
        <MasterLayout>
            <div className="row mt-4">
                <div className="col-xl-4 col-md-4">
                    <Wellhead2a />
                </div>
                <div className="col-xl-4 col-md-4">
                    <Wellhead4 />
                </div>
                <div className="col-xl-4 col-md-4">
                    <Wellhead5 />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-4 col-md-4">
                    <Wellhead9 />
                </div>
                <div className="col-xl-4 col-md-4">
                    <Wellhead15 />
                </div>
                <div className="col-xl-4 col-md-4">
                    <Wellhead16 />
                </div>
            </div>
        </MasterLayout>
    )
}

export default WellheadB1