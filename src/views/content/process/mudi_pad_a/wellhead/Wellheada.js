import React, { useState, useEffect } from 'react'
import Horizontal from '../../../../../components/faceplate/pipe/Horizontal'
import Vertical from '../../../../../components/faceplate/pipe/Vertical'
import Bowtopleft from '../../../../../components/faceplate/pipe/Bowtopleft'
import pcv from '../../../../../assets/img/faceplate/pcv-run.png'
import pcvstop from '../../../../../assets/img/faceplate/pcv-stop.png'
import valve from '../../../../../assets/img/faceplate/valve.png'
import gauge from '../../../../../assets/img/faceplate/gauge.png'
import sv from '../../../../../assets/img/faceplate/sv.png'
import indicator from '../../../../../assets/img/faceplate/indicator.png'
import wellhead from '../../../../../assets/img/faceplate/wellhead-stop.png'
import Bowbottomleft from '../../../../../components/faceplate/pipe/Bowbottomleft'
import './wellheada.css'
import Blackbox from '../../../../../components/faceplate/blackbox/Blackbox'
import axios from 'axios'
import Swal from 'sweetalert2'

function Wellheada() {
    const [pshh3001, setPshh3001] = useState('');
    const [pt3001, setPt3001] = useState('');
    const [sdv1012, setSdv1012] = useState('');
    const [sdv1013, setSdv1013] = useState('');
    // const [msg, setMsg] = useState('');

    // const navigate = useNavigate();
    const wellhead1 = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + 'pad_a/wellhead/m1');
            const value = response.data.values[0];
            console.log(response.data)
            setPshh3001(value.pshH_3001)
            setPt3001(value.pT_3001)
            setSdv1012(value.sdV_1012)
            setSdv1013(value.sdV_1013)

        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message)
                Swal.fire({
                    title: 'Oops!',
                    text: error.response.data.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })

            }
        }
    }
    useEffect(() => {
        wellhead1();
    }, []);
    return (
        <>
            <div className="card border-secondary" style={{ height: '300px' }}>
                <div className="card-header fw-semibold text-center text-white bg-secondary">
                    WELLHEAD M#1
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
                                <div className='padb-well-1-vertival-left-side'>
                                    <Vertical />
                                </div>
                                <div className='padb-well-1-vertival-left-bottom-bow'>
                                    <Bowbottomleft />
                                </div>
                            </div>
                            <div className='d-flex align-items-end'>
                                <div className='padb-well-1-horizontal-bottom-side-one'>
                                    <Horizontal />
                                </div>
                                <img className='padb-well-1-pcv-bottom-side' id='sdv1013' src={sdv1013 === 1 ? pcv : pcvstop} alt='' />
                                <div className='padb-well-1-horizontal-bottom-side-two'>
                                    <Horizontal />
                                </div>
                                <img className='padb-well-1-wellhead' src={wellhead} alt='' />
                            </div>
                            <div className='padb-well-1-vertical-from-wellhead'>
                                <Vertical />
                            </div>
                            <div className='padb-well-1-wellhead-black-box'>
                                <Blackbox />
                            </div>
                            <div className='padb-well-1-vertical-from-wellhead-to-valve'>
                                <Vertical />
                            </div>
                            <img className='padb-well-1-valve-to-indicator' src={valve} alt='' />
                            <div className='padb-well-1-vertical-from-wellhead-to-indicator'>
                                <Vertical />
                            </div>
                            <div className='padb-well-1-horizontal-from-wellhead-to-indicator'>
                                <Horizontal />
                            </div>
                            <img className='padb-well-1-wellhead-gauge' src={gauge} alt='' />
                            <img className='padb-well-1-wellhead-indicator' src={indicator} alt='' />
                            <div className='padb-well-1-horizontal-from-box'>
                                <Horizontal />
                            </div>
                            <img className='padb-well-1-pcv-from-box-to-safety' id='sdv1012' src={sdv1012 === 1 ? pcv : pcvstop} alt='' />
                            <div className='padb-well-1-horizontal-to-safety'>
                                <Horizontal />
                            </div>
                            <img className='padb-well-1-sv-from-pcv' src={sv} alt='' />
                            <div className='padb-well-1-vertical-from-safety'>
                                <Vertical />
                            </div>
                            <span className='padb-well-1-lbl-to-plant'>TO MANIFOLD</span>
                            {/* PSHH */}
                            <div className='d-flex flex-column bg-light p-1 border border-primary padb-well-1-pshh-3001'>
                                <span className='padb-well-1-txt-pshh-3001 p-1 text-center bg-dark fw-bolder text-white'>PSHH-3001</span>
                                <span className={'padb-well-1-indicator-pshh-3001 p-1 text-center fw-bold ' + (pshh3001 === "NORMAL" ? 'bg-normal' : 'bg-error')}>{pshh3001 ? pshh3001 : 'ERROR'}</span>
                            </div>
                            {/* PT-3001 */}
                            <div className='d-flex flex-column bg-light p-1 border border-primary padb-well-1-pt-3001'>
                                <span className='padb-well-1-txt-pt-3001 p-1 text-center bg-dark fw-bolder text-white'>PT-3001</span>
                                <span className='padb-well-1-indicator-pt-3001 p-1 text-center fw-bold'>{pt3001 ? pt3001 : '####'}</span>
                            </div>
                            {/* SDV-1013 */}
                            <div className='d-flex flex-column bg-light p-1 border border-primary padb-well-1-sdv-1013'>
                                <span className='padb-well-1-txt-sdv-1013 p-1 text-center bg-dark fw-bolder text-white'>SDV-1013</span>
                                <span className={'padb-well-1-indicator-sdv-1013 p-1 text-center fw-bold ' + (sdv1013 === 1 ? 'bg-normal' : 'bg-error')}>{sdv1013 === 1 ? 'OPEN' : 'CLOSE'}</span>
                            </div>
                            {/* SDV-1012 */}
                            <div className='d-flex flex-column bg-light p-1 border border-primary padb-well-1-sdv-1012'>
                                <span className='padb-well-1-txt-sdv-1012 p-1 text-center bg-dark fw-bolder text-white'>SDV-1012</span>
                                <span className={'padb-well-1-indicator-sdv-1012 p-1 text-center fw-bold ' + (sdv1012 === 1 ? 'bg-normal' : 'bg-error')}>{sdv1012 === 1 ? 'OPEN' : 'CLOSE'}</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Wellheada