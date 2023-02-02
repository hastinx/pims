import React from 'react'

function Blocksummary() {
    return (
        <>
            <div className="card border-secondary">
                <div className="card-header fw-semibold text-center text-white bg-secondary">
                    BLOCK SUMMARY
                </div>
                <div className="card-body">
                    <div className='row'>
                        <span className='col-md-5'>First Production</span>
                        <span className='col-md-1'>:</span>
                        <span className='col-md-6'>6,500 bopd (Mudi-Desember 1997)</span>
                    </div>
                    <div className='row'>
                        <span className='col-md-5'>Peak Production</span>
                        <span className='col-md-1'>:</span>
                        <span className='col-md-6 text-start'>46,389 bopd (Mudi + Sukowati 100%) Oktober 2011</span>
                    </div>
                    <div className='row'>
                        <span className='col-md-5'>Curr.Production</span>
                        <span className='col-md-1'>:</span>
                        <span className='col-md-6 text-start'>YTD january 2022 <br /> 1,003 BOPD<br /> 1.13 MMSCFD</span>
                    </div>
                    <div className='row'>
                        <span className='col-md-5'>Existing Gas buyer</span>
                        <span className='col-md-1'>:</span>
                        <span className='col-md-6 text-start'>PT.Gresik Migas</span>
                    </div>
                    <div className='row'>
                        <span className='col-md-5'>Production Field</span>
                        <span className='col-md-1'>:</span>
                        <span className='col-md-6 text-start'>2 Fields Mudi & Lengowangi</span>
                    </div>
                    <div className='row'>
                        <span className='col-md-5'>Major Facilities</span>
                        <span className='col-md-1'>:</span>
                        <span className='col-md-6 text-start'>Mudi PAD 1,2,3,Lengowangi</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blocksummary