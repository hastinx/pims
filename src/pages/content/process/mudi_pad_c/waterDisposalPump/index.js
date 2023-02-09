import React from 'react'
import WaterDisposalSatu from '../../../../../components/Faceplate/waterDisposal/waterDisposalSatu'
import MasterLayout from '../../../../../components/Layout'

const WaterDisposalPump = () => {
    return (
        <MasterLayout>
            <div className='row mt-4'>
                <div className='col-md-12'>
                    <WaterDisposalSatu />
                </div>
            </div>

        </MasterLayout>
    )
}

export default WaterDisposalPump