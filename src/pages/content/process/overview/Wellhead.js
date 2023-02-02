import React from 'react'
import Horizontal from '../../../../components/faceplate/pipe/Horizontal'
import Vertical from '../../../../components/faceplate/pipe/Vertical'
import Bowtopleft from '../../../../components/faceplate/pipe/Bowtopleft'
import pcv from '../../../../assets/img/faceplate/pcv-run.png'
import valve from '../../../../assets/img/faceplate/valve.png'
import gauge from '../../../../assets/img/faceplate/gauge.png'
import sv from '../../../../assets/img/faceplate/sv.png'
import indicator from '../../../../assets/img/faceplate/indicator.png'
import wellhead from '../../../../assets/img/faceplate/wellhead-stop.png'
import Bowbottomleft from '../../../../components/faceplate/pipe/Bowbottomleft'

import './wellhead.css'
import Blackbox from '../../../../components/faceplate/blackbox/Blackbox'

function Wellhead() {
    return (
        <>
            <div className="card border-secondary" style={{ height: '300px' }}>
                <div className="card-header fw-semibold text-center text-white bg-secondary">
                    MUDI PAD A - WELLHEAD
                </div>
                <div className="card-body">
                    <div className='wrapper-bottom'>
                        <div className='d-flex'>
                            <div style={{
                                height: '10px',
                                width: '10px'
                            }}>
                                <Bowtopleft />
                            </div>
                            <div style={{
                                height: '10px',
                                width: '100%'
                            }}>
                                <Horizontal />
                            </div>
                        </div>
                        <div className='d-flex flex-column'>
                            <div className='vertival-left-side'>
                                <Vertical />
                            </div>
                            <div className='vertival-left-bottom-bow'>
                                <Bowbottomleft />
                            </div>
                        </div>
                        <div className='d-flex align-items-end'>
                            <div className='horizontal-bottom-side-one'>
                                <Horizontal />
                            </div>
                            <img className='pcv-bottom-side' src={pcv} alt='' />
                            <div className='horizontal-bottom-side-two'>
                                <Horizontal />
                            </div>
                            <img className='wellhead' src={wellhead} alt='' />
                        </div>
                        <div className='vertical-from-wellhead'>
                            <Vertical />
                        </div>
                        <div className='wellhead-black-box'>
                            <Blackbox />
                        </div>
                        <div className='vertical-from-wellhead-to-valve'>
                            <Vertical />
                        </div>
                        <img className='valve-to-indicator' src={valve} alt='' />
                        <div className='vertical-from-wellhead-to-indicator'>
                            <Vertical />
                        </div>
                        <div className='horizontal-from-wellhead-to-indicator'>
                            <Horizontal />
                        </div>
                        <img className='wellhead-gauge' src={gauge} alt='' />
                        <img className='wellhead-indicator' src={indicator} alt='' />
                        <div className='horizontal-from-box'>
                            <Horizontal />
                        </div>
                        <img className='pcv-from-box-to-safety' src={pcv} alt='' />
                        <div className='horizontal-to-safety'>
                            <Horizontal />
                        </div>
                        <img className='sv-from-pcv' src={sv} alt='' />
                        <div className='vertical-from-safety'>
                            <Vertical />
                        </div>
                        <span className='lbl-to-plant'>TO MANIFOLD</span>
                        <span className='lbl-pcv-to-wellhead text-center'>21231</span>
                        <span className='lbl-pcv-from-wellhead text-center'>312312</span>
                        <span className='lbl-gauge text-center'>675</span>
                        <span className='lbl-indicator text-center'>8978</span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Wellhead