import React from 'react'
import Horizontal from './pipe/Horizontal'
import Vertical from './pipe/Vertical'
import Bowtopleft from './pipe/Bowtopleft'
import pcv from '../../assets/img/faceplate/pcv-run.png'
import pcvstop from '../../assets/img/faceplate/pcv-stop.png'
import valve from '../../assets/img/faceplate/valve.png'
import gauge from '../../assets/img/faceplate/gauge.png'
import sv from '../../assets/img/faceplate/sv.png'
import indicator from '../../assets/img/faceplate/indicator.png'
import wellhead from '../../assets/img/faceplate/wellhead-stop.png'
import Bowbottomleft from './pipe/Bowbottomleft'
import './wellheada.css'
import Blackbox from './blackbox/Blackbox'
import Alert from 'react-bootstrap/Alert';

function Wellhead(props) {

    return (
        <>
            <div className="card border-secondary" style={{ height: '300px' }}>
                <div className="card-header fw-semibold text-center text-white bg-secondary d-flex justify-content-between">
                    WELLHEAD {props.title}
                    <span className='text-danger blink bg-white'> ALARM </span>
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
                                <img className='pcv-bottom-side' id='sdv1013' src={props.sdvTwoStatus === 1 ? pcv : pcvstop} alt='' />
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
                            <img className='pcv-from-box-to-safety' id='sdv1012' src={props.sdvOneStatus === 1 ? pcv : pcvstop} alt='' />
                            <div className='horizontal-to-safety'>
                                <Horizontal />
                            </div>
                            <img className='sv-from-pcv' src={sv} alt='' />
                            <div className='vertical-from-safety'>
                                <Vertical />
                            </div>
                            <span className='lbl-to-plant'>TO MANIFOLD</span>
                            {/* PSHH */}
                            <div className='d-flex flex-column bg-light p-1 border border-primary pshh-3001'>
                                <span className='txt-pshh-3001 p-1 text-center bg-dark fw-bolder text-white'>{props.pshhTitle}</span>
                                <span className={'indicator-pshh-3001 p-1 text-center fw-bold ' + (props.pshhStatus === "NORMAL" ? 'bg-normal' : 'bg-error')}>{props.pshhStatus ? props.pshhStatus : 'ALARM'}</span>
                            </div>
                            {/* PT-3001 */}
                            <div className='d-flex flex-column bg-light p-1 border border-primary pt-3001'>
                                <span className='txt-pt-3001 p-1 text-center bg-dark fw-bolder text-white'>{props.ptTitle}</span>
                                <span className='indicator-pt-3001 p-1 text-center fw-bold'>{props.ptStatus ? props.ptStatus : '####'}</span>
                            </div>
                            {/* SDV-1013 */}
                            <div className='d-flex flex-column bg-light p-1 border border-primary sdv-1013'>
                                <span className='txt-sdv-1013 p-1 text-center bg-dark fw-bolder text-white'>{props.sdvTwoTitle}</span>
                                <span className={'indicator-sdv-1013 p-1 text-center fw-bold ' + (props.sdvTwoStatus === 1 ? 'bg-normal' : 'bg-error')}>{props.sdvTwoStatus === 1 ? 'OPEN' : 'CLOSE'}</span>
                            </div>
                            {/* SDV-1012 */}
                            <div className='d-flex flex-column bg-light p-1 border border-primary sdv-1012'>
                                <span className='txt-sdv-1012 p-1 text-center bg-dark fw-bolder text-white'>{props.sdvOneTitle}</span>
                                <span className={'indicator-sdv-1013 p-1 text-center fw-bold ' + (props.sdvOneStatus === 1 ? 'bg-normal' : 'bg-error')}>{props.sdvOneStatus === 1 ? 'OPEN' : 'CLOSE'}</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Wellhead