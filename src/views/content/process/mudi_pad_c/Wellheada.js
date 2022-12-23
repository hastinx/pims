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

import './wellheada.css'
import Blackbox from '../../../../components/faceplate/blackbox/Blackbox'

function Wellheada() {
    return (
        <>
            <div className="card border-secondary" style={{ height: '300px' }}>
                <div className="card-header fw-semibold text-center text-white bg-secondary">
                    WELLHEAD M#3
                </div>
                <div className="card-body">
                    <div className='wrap-well'>
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
                                <div className='padb-well-3-vertival-left-side'>
                                    <Vertical />
                                </div>
                                <div className='padb-well-3-vertival-left-bottom-bow'>
                                    <Bowbottomleft />
                                </div>
                            </div>
                            <div className='d-flex align-items-end'>
                                <div className='padb-well-3-horizontal-bottom-side-one'>
                                    <Horizontal />
                                </div>
                                <img className='padb-well-3-pcv-bottom-side' src={pcv} alt='' />
                                <div className='padb-well-3-horizontal-bottom-side-two'>
                                    <Horizontal />
                                </div>
                                <img className='padb-well-3-wellhead' src={wellhead} alt='' />
                            </div>
                            <div className='padb-well-3-vertical-from-wellhead'>
                                <Vertical />
                            </div>
                            <div className='padb-well-3-wellhead-black-box'>
                                <Blackbox />
                            </div>
                            <div className='padb-well-3-vertical-from-wellhead-to-valve'>
                                <Vertical />
                            </div>
                            <img className='padb-well-3-valve-to-indicator' src={valve} alt='' />
                            <div className='padb-well-3-vertical-from-wellhead-to-indicator'>
                                <Vertical />
                            </div>
                            <div className='padb-well-3-horizontal-from-wellhead-to-indicator'>
                                <Horizontal />
                            </div>
                            <img className='padb-well-3-wellhead-gauge' src={gauge} alt='' />
                            <img className='padb-well-3-wellhead-indicator' src={indicator} alt='' />
                            <div className='padb-well-3-horizontal-from-box'>
                                <Horizontal />
                            </div>
                            <img className='padb-well-3-pcv-from-box-to-safety' src={pcv} alt='' />
                            <div className='padb-well-3-horizontal-to-safety'>
                                <Horizontal />
                            </div>
                            <img className='padb-well-3-sv-from-pcv' src={sv} alt='' />
                            <div className='padb-well-3-vertical-from-safety'>
                                <Vertical />
                            </div>
                            <span className='padb-well-3-lbl-to-plant'>TO MANIFOLD</span>
                            {/* PSHH */}
                            <div className='d-flex flex-column bg-light p-1 border border-primary padb-well-3-pshh-3003'>
                                <span className='padb-well-3-txt-pshh-3003 p-1 text-center bg-dark fw-bolder text-white'>PSHH-3003</span>
                                <span className='padb-well-3-indicator-pshh-3003 p-1 text-center fw-bold bg-normal'>NORMAL</span>
                            </div>
                            {/* PT-3003 */}
                            <div className='d-flex flex-column bg-light p-1 border border-primary padb-well-3-pt-3003'>
                                <span className='padb-well-3-txt-pt-3003 p-1 text-center bg-dark fw-bolder text-white'>PT-3003</span>
                                <span className='padb-well-3-indicator-pt-3003 p-1 text-center fw-bold'>##.###</span>
                            </div>
                            {/* SDV-1033 */}
                            <div className='d-flex flex-column bg-light p-1 border border-primary padb-well-3-sdv-1033'>
                                <span className='padb-well-3-txt-sdv-1033 p-1 text-center bg-dark fw-bolder text-white'>SDV-1033</span>
                                <span className='padb-well-3-indicator-sdv-1033 p-1 text-center fw-bold bg-normal'>OPEN</span>
                            </div>
                            {/* SDV-1032 */}
                            <div className='d-flex flex-column bg-light p-1 border border-primary padb-well-3-sdv-1032'>
                                <span className='padb-well-3-txt-sdv-1032 p-1 text-center bg-dark fw-bolder text-white'>SDV-1032</span>
                                <span className='padb-well-3-indicator-sdv-1032 p-1 text-center fw-bold bg-normal'>OPEN</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Wellheada