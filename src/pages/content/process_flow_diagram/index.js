import React from 'react'
import WellheadToHeader from '../../../components/Faceplate/wellheadToHeader'
import MasterLayout from '../../../components/Layout'

const ProcessFlowDiagram = () => {
    return (
        <MasterLayout>
            <div className='card large mt-4'>
                <div className='card-header text-center bg-secondary text-white'>Process Flow Diagram MUDI</div>
                <div className='card-body bg-gray'>
                    <WellheadToHeader />
                </div>
            </div>
        </MasterLayout>
    )
}

export default ProcessFlowDiagram