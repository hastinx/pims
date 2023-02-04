import React from 'react';
import './testseparator.css'
import Tankhorizontal from '../../assets/img/faceplate/ht.png'
import Horizontal from './pipe/Horizontal'
import Vertical from './pipe/Vertical'
import Bowtopleft from './pipe/Bowtopleft'
import pcv from '../../assets/img/faceplate/pcv-run.png'
import ft from '../../assets/img/faceplate/ft.png'
import lcv from '../../assets/img/faceplate/lcv.png'
import Bowbottomleft from './pipe/Bowbottomleft'
import { useNavigate } from 'react-router-dom';

function Testseparator(props) {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(props.nav)
    }
    return (
        <>

            <div className="card border-secondary card-hover" style={{ height: '320px', marginTop: '5px' }} onClick={handleNavigate}>
                <div className="card-header fw-semibold text-center text-white bg-secondary">
                    {props.title}
                </div>
                <div className="card-body">
                    <div className='wrapper-separator'>
                        <div>
                            <img className='testseparator-tank-horizontal' src={Tankhorizontal} alt='' />
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex flex-column'>
                                <div className='testseparator-top-left-bow'>
                                    <Bowtopleft />
                                </div>
                                <div className='testseparator-vertical-left-one'>
                                    <Vertical />
                                </div>
                                <div className='testseparator-vertical-left-two'>
                                    <Vertical />
                                </div>
                            </div>
                            <img className='testseparator-pcv-bdv1151' src={pcv} alt='' />
                            <img className='testseparator-pcv-esdv1151' src={pcv} alt='' />
                            <div className='testseparator-horizontal-top'>
                                <Horizontal />
                            </div>
                            <div className='testseparator-horizontal-bottom-one'>
                                <Horizontal />
                            </div>
                            <div className='testseparator-horizontal-bottom-two'>
                                <Horizontal />
                            </div>
                            <div className='testseparator-bottom-rigth-bow'>
                                <Bowtopleft />
                            </div>
                            <div className='testseparator-vertical-left-three'>
                                <Vertical />
                            </div>
                            <div className='testseparator-bottom-left-bow-to-tank'>
                                <Bowtopleft />
                            </div>
                            <div className='testseparator-horizontal-bottom-to-tank'>
                                <Horizontal />
                            </div>
                            <div className='testseparator-vertical-top-to-separator'>
                                <Vertical />
                            </div>
                            <div className='testseparator-bow-top-one-to-separator'>
                                <Bowtopleft />
                            </div>
                            <div className='testseparator-horizontal-top-one-to-separator'>
                                <Horizontal />
                            </div>
                            <div className='testseparator-vertical-top-to-wellpad-vessel-one'>
                                <Vertical />
                            </div>
                            <div className='testseparator-bow-top-one-to-wellpad-vessel-one'>
                                <Bowtopleft />
                            </div>
                            <div className='testseparator-horizontal-top-one-to-wellpad-vessel-one'>
                                <Horizontal />
                            </div>
                            <div className='testseparator-bow-top-two-to-wellpad-vessel-one'>
                                <Bowtopleft />
                            </div>
                            <div className='testseparator-vertical-right-to-wellpad-vessel-one'>
                                <Vertical />
                            </div>
                            <div className='testseparator-bow-right-one-to-wellpad-vessel-one'>
                                <Bowbottomleft />
                            </div>
                            <div className='testseparator-horizontal-right-one-to-wellpad-vessel-one'>
                                <Horizontal />
                            </div>
                            <img className='testseparator-lcv-right-one-to-wellpad-vessel-one' src={lcv} alt='' />
                            <div className='testseparator-horizontal-right-two-to-wellpad-vessel-one'>
                                <Horizontal />
                            </div>
                            <div className='testseparator-vertical-right-one-to-wellpad-vessel-one'>
                                <Vertical />
                            </div>
                            <div className='testseparator-bow-right-baypass-one-to-wellpad-vessel-one'>
                                <Bowtopleft />
                            </div>
                            <div className='testseparator-horizontal-right-bypass-one-to-wellpad-vessel-one'>
                                <Horizontal />
                            </div>
                            <img className='testseparator-lcv-right-bypass-one-to-wellpad-vessel-one' src={lcv} alt='' />
                            <div className='testseparator-horizontal-right-bypass-two-to-wellpad-vessel-one'>
                                <Horizontal />
                            </div>
                            <div className='testseparator-bow-right-baypass-two-to-wellpad-vessel-one'>
                                <Bowtopleft />
                            </div>
                            <div className='testseparator-vertical-right-two-to-wellpad-vessel-one'>
                                <Vertical />
                            </div>
                            <div className='testseparator-vertical-bottom-one-to-wellpad-vessel-two'>
                                <Vertical />
                            </div>
                            <div className='testseparator-bow-bottom-one-to-wellpad-vessel-two'>
                                <Bowbottomleft />
                            </div>
                            <div className='testseparator-horizontal-bottom-one-to-wellpad-vessel-two'>
                                <Horizontal />
                            </div>
                            <img className='testseparator-ft-bottom-one-to-wellpad-vessel-two' src={ft} alt='' />
                            <div className='testseparator-vertical-bottom-one-bypass-to-wellpad-vessel-two'>
                                <Vertical />
                            </div>
                            <div className='testseparator-bow-bottom-one-bypass-to-wellpad-vessel-two'>
                                <Bowtopleft />
                            </div>
                            <div className='testseparator-horizontal-bottom-one-bypass-to-wellpad-vessel-two'>
                                <Horizontal />
                            </div>
                            <img className='testseparator-ft-bottom-one-bypass-to-wellpad-vessel-two' src={ft} alt='' />
                            <div className='testseparator-horizontal-bottom-two-bypass-to-wellpad-vessel-two'>
                                <Horizontal />
                            </div>
                            <div className='testseparator-bow-bottom-two-bypass-to-wellpad-vessel-two'>
                                <Bowtopleft />
                            </div>
                            <div className='testseparator-vertical-bottom-two-bypass-to-wellpad-vessel-two'>
                                <Vertical />
                            </div>
                            <div className='testseparator-horizontal-bottom-two-to-wellpad-vessel-two'>
                                <Horizontal />
                            </div>
                            <img className='testseparator-lcv-bottom-one-to-wellpad-vessel-two' src={lcv} alt='' />
                            <div className='testseparator-horizontal-bottom-three-to-wellpad-vessel-two'>
                                <Horizontal />
                            </div>
                            {/*TO WELLPAD VESSEL THREE (BOTTOM) */}
                            <div className='testseparator-vertical-bottom-one-to-wellpad-vessel-three'>
                                <Vertical />
                            </div>
                            <div className='testseparator-bow-bottom-one-to-wellpad-vessel-three'>
                                <Bowbottomleft />
                            </div>
                            <div className='testseparator-horizontal-bottom-one-to-wellpad-vessel-three'>
                                <Horizontal />
                            </div>
                            <img className='testseparator-ft-bottom-one-to-wellpad-vessel-three' src={ft} alt='' />
                            <div className='testseparator-vertical-bottom-one-bypass-to-wellpad-vessel-three'>
                                <Vertical />
                            </div>
                            <div className='testseparator-bow-bottom-one-bypass-to-wellpad-vessel-three'>
                                <Bowtopleft />
                            </div>
                            <div className='testseparator-horizontal-bottom-one-bypass-to-wellpad-vessel-three'>
                                <Horizontal />
                            </div>
                            <img className='testseparator-ft-bottom-one-bypass-to-wellpad-vessel-three' src={ft} alt='' />
                            <div className='testseparator-horizontal-bottom-two-bypass-to-wellpad-vessel-three'>
                                <Horizontal />
                            </div>
                            <div className='testseparator-bow-bottom-two-bypass-to-wellpad-vessel-three'>
                                <Bowtopleft />
                            </div>
                            <div className='testseparator-vertical-bottom-two-bypass-to-wellpad-vessel-three'>
                                <Vertical />
                            </div>
                            <div className='testseparator-horizontal-bottom-two-to-wellpad-vessel-three'>
                                <Horizontal />
                            </div>
                            <img className='testseparator-lcv-bottom-one-to-wellpad-vessel-three' src={lcv} alt='' />
                            <div className='testseparator-horizontal-bottom-three-to-wellpad-vessel-three'>
                                <Horizontal />
                            </div>
                        </div>


                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testseparator