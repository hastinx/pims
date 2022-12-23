import React from 'react'

function Overview() {
    return (
        <>
            <div className="card border-success" style={{ height: '100%' }}>
                <div className="card-header fw-semibold text-center text-white bg-success">
                    CONTRACT SUMMARY
                </div>
                <div className="card-body">
                    <div className='row'>
                        <span className='col-md-5'>Block Name</span>
                        <span className='col-md-1'>:</span>
                        <span className='col-md-6'>Tuban Block</span>
                    </div>
                    <div className='row'>
                        <span className='col-md-5'>PSC Term</span>
                        <span className='col-md-1'>:</span>
                        <span className='col-md-6 text-start'>20 Mei 2018 - 19 Mei 2038</span>
                    </div>
                    <div className='row'>
                        <span className='col-md-5'>Participants</span>
                        <span className='col-md-1'>:</span>
                        <span className='col-md-6 text-start'>100% - PHE</span>
                    </div>
                    <div className='row'>
                        <span className='col-md-5'>Operator</span>
                        <span className='col-md-1'>:</span>
                        <span className='col-md-6 text-start'>PHE Tuban East Java</span>
                    </div>
                    <div className='row'>
                        <span className='col-md-5'>Contract Type</span>
                        <span className='col-md-1'>:</span>
                        <span className='col-md-6 text-start'>Gross Split</span>
                    </div>
                    <div className='row'>
                        <span className='col-md-5'>Area</span>
                        <span className='col-md-1'>:</span>
                        <span className='col-md-6 text-start'>Present : 1,478 KM2</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview