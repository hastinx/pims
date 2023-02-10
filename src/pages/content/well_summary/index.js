import React from 'react'
import MasterLayout from '../../../components/Layout'
import MasterWellSummary from '../../../components/WellSummary'

const WellSummary = () => {
    return (
        <MasterLayout>
            <div className="row mt-4">
                <div className="col-xl-12 col-md-12 ">
                    <div className='card'>
                        <div className='card-header text-center bg-secondary text-white'>
                            MUDI PAD A
                        </div>
                        <div className='card-body d-flex flex-wrap'>
                            <MasterWellSummary status="STOP" tag="WELLHEAD M#1" />
                            <MasterWellSummary status="ON" tag="WELLHEAD M#10" />
                            <MasterWellSummary status="ON" tag="WELLHEAD M#11" />
                            <MasterWellSummary status="STOP" tag="WELLHEAD M#19" />
                            <MasterWellSummary status="STOP" tag="WELLHEAD M#21" />
                            <MasterWellSummary status="STOP" tag="WELLHEAD M#22" />
                            <MasterWellSummary status="ON" tag="WELLHEAD M#27" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-12 col-md-12 ">
                    <div className='card'>
                        <div className='card-header text-center bg-secondary text-white'>
                            MUDI PAD B
                        </div>
                        <div className='card-body d-flex flex-wrap'>
                            <MasterWellSummary status="STOP" tag="WELLHEAD M#2" />
                            <MasterWellSummary status="STOP" tag="WELLHEAD M#4" />
                            <MasterWellSummary status="STOP" tag="WELLHEAD M#5" />
                            <MasterWellSummary status="STOP" tag="WELLHEAD M#9" />
                            <MasterWellSummary status="STOP" tag="WELLHEAD M#15" />
                            <MasterWellSummary status="STOP" tag="WELLHEAD M#16" />
                            <MasterWellSummary status="STOP" tag="WELLHEAD M#17" />
                            <MasterWellSummary status="ON" tag="WELLHEAD M#18" />
                            <MasterWellSummary status="ON" tag="WELLHEAD M#23" />
                            <MasterWellSummary status="STOP" tag="WELLHEAD M#24" />
                            <MasterWellSummary status="ON" tag="WELLHEAD M#25" />
                            <MasterWellSummary status="STOP" tag="WELLHEAD M#26" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-6 col-md-6 ">
                    <div className='card'>
                        <div className='card-header text-center bg-secondary text-white'>
                            MUDI PAD C
                        </div>
                        <div className='card-body d-flex flex-wrap'>
                            <MasterWellSummary status="STOP" tag="WELLHEAD M#7" />
                            <MasterWellSummary status="ON" tag="WELLHEAD M#20" />
                            <MasterWellSummary status="ON" tag="WELLHEAD M#13" />

                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-6 ">
                    <div className='card'>
                        <div className='card-header text-center bg-secondary text-white'>
                            WATER INJECTOR
                        </div>
                        <div className='card-body d-flex flex-wrap'>
                            <MasterWellSummary status="ON" tag="WATER INJECT M#6" />
                            <MasterWellSummary status="STOP" tag="WATER INJECT M#8" />
                            <MasterWellSummary status="ON" tag="WATER INJECT M#12" />
                            <MasterWellSummary status="ON" tag="WATER INJECT M#4" />

                        </div>
                    </div>
                </div>
            </div>
        </MasterLayout>
    )
}

export default WellSummary