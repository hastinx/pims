import React from 'react';
import './testseparator.css'
import Tankhorizontal from '../../../../assets/img/faceplate/ht.png'
import Horizontal from '../../../../components/faceplate/pipe/Horizontal'
import Vertical from '../../../../components/faceplate/pipe/Vertical'
import Bowtopleft from '../../../../components/faceplate/pipe/Bowtopleft'
import pcv from '../../../../assets/img/faceplate/pcv-run.png'
import ft from '../../../../assets/img/faceplate/ft.png'
import lcv from '../../../../assets/img/faceplate/lcv.png'
import Bowbottomleft from '../../../../components/faceplate/pipe/Bowbottomleft'

function Testseparator() {
    return (
        <>
            <div className="card border-secondary" style={{ height: '300px' }}>
                <div className="card-header fw-semibold text-center text-white bg-secondary">
                    MUDI PAD A - TEST SEPARATOR
                </div>
                <div className="card-body">
                    <div>
                        <img className='tank-horizontal' src={Tankhorizontal} alt='' />
                    </div>
                    <div className='d-flex'>
                        <div className='d-flex flex-column'>
                            <div className='top-left-bow'>
                                <Bowtopleft />
                            </div>
                            <div className='vertical-left-one'>
                                <Vertical />
                            </div>
                            <div className='vertical-left-two'>
                                <Vertical />
                            </div>
                        </div>
                        <img className='pcv-bdv1151' src={pcv} alt='' />
                        <img className='pcv-esdv1151' src={pcv} alt='' />
                        <div className='horizontal-top'>
                            <Horizontal />
                        </div>
                        <div className='horizontal-bottom-one'>
                            <Horizontal />
                        </div>
                        <div className='horizontal-bottom-two'>
                            <Horizontal />
                        </div>
                        <div className='bottom-rigth-bow'>
                            <Bowtopleft />
                        </div>
                        <div className='vertical-left-three'>
                            <Vertical />
                        </div>
                        <div className='bottom-left-bow-to-tank'>
                            <Bowtopleft />
                        </div>
                        <div className='horizontal-bottom-to-tank'>
                            <Horizontal />
                        </div>
                        <div className='vertical-top-to-separator'>
                            <Vertical />
                        </div>
                        <div className='bow-top-one-to-separator'>
                            <Bowtopleft />
                        </div>
                        <div className='horizontal-top-one-to-separator'>
                            <Horizontal />
                        </div>
                        <div className='vertical-top-to-wellpad-vessel-one'>
                            <Vertical />
                        </div>
                        <div className='bow-top-one-to-wellpad-vessel-one'>
                            <Bowtopleft />
                        </div>
                        <div className='horizontal-top-one-to-wellpad-vessel-one'>
                            <Horizontal />
                        </div>
                        <div className='bow-top-two-to-wellpad-vessel-one'>
                            <Bowtopleft />
                        </div>
                        <div className='vertical-right-to-wellpad-vessel-one'>
                            <Vertical />
                        </div>
                        <div className='bow-right-one-to-wellpad-vessel-one'>
                            <Bowbottomleft />
                        </div>
                        <div className='horizontal-right-one-to-wellpad-vessel-one'>
                            <Horizontal />
                        </div>
                        <img className='lcv-right-one-to-wellpad-vessel-one' src={lcv} alt='' />
                        <div className='horizontal-right-two-to-wellpad-vessel-one'>
                            <Horizontal />
                        </div>
                        <div className='vertical-right-one-to-wellpad-vessel-one'>
                            <Vertical />
                        </div>
                        <div className='bow-right-baypass-one-to-wellpad-vessel-one'>
                            <Bowtopleft />
                        </div>
                        <div className='horizontal-right-bypass-one-to-wellpad-vessel-one'>
                            <Horizontal />
                        </div>
                        <img className='lcv-right-bypass-one-to-wellpad-vessel-one' src={lcv} alt='' />
                        <div className='horizontal-right-bypass-two-to-wellpad-vessel-one'>
                            <Horizontal />
                        </div>
                        <div className='bow-right-baypass-two-to-wellpad-vessel-one'>
                            <Bowtopleft />
                        </div>
                        <div className='vertical-right-two-to-wellpad-vessel-one'>
                            <Vertical />
                        </div>
                        <div className='vertical-bottom-one-to-wellpad-vessel-two'>
                            <Vertical />
                        </div>
                        <div className='bow-bottom-one-to-wellpad-vessel-two'>
                            <Bowbottomleft />
                        </div>
                        <div className='horizontal-bottom-one-to-wellpad-vessel-two'>
                            <Horizontal />
                        </div>
                        <img className='ft-bottom-one-to-wellpad-vessel-two' src={ft} alt='' />
                        <div className='vertical-bottom-one-bypass-to-wellpad-vessel-two'>
                            <Vertical />
                        </div>
                        <div className='bow-bottom-one-bypass-to-wellpad-vessel-two'>
                            <Bowtopleft />
                        </div>
                        <div className='horizontal-bottom-one-bypass-to-wellpad-vessel-two'>
                            <Horizontal />
                        </div>
                        <img className='ft-bottom-one-bypass-to-wellpad-vessel-two' src={ft} alt='' />
                        <div className='horizontal-bottom-two-bypass-to-wellpad-vessel-two'>
                            <Horizontal />
                        </div>
                        <div className='bow-bottom-two-bypass-to-wellpad-vessel-two'>
                            <Bowtopleft />
                        </div>
                        <div className='vertical-bottom-two-bypass-to-wellpad-vessel-two'>
                            <Vertical />
                        </div>
                        <div className='horizontal-bottom-two-to-wellpad-vessel-two'>
                            <Horizontal />
                        </div>
                        <img className='lcv-bottom-one-to-wellpad-vessel-two' src={lcv} alt='' />
                        <div className='horizontal-bottom-three-to-wellpad-vessel-two'>
                            <Horizontal />
                        </div>
                        {/*TO WELLPAD VESSEL THREE (BOTTOM) */}
                        <div className='vertical-bottom-one-to-wellpad-vessel-three'>
                            <Vertical />
                        </div>
                        <div className='bow-bottom-one-to-wellpad-vessel-three'>
                            <Bowbottomleft />
                        </div>
                        <div className='horizontal-bottom-one-to-wellpad-vessel-three'>
                            <Horizontal />
                        </div>
                        <img className='ft-bottom-one-to-wellpad-vessel-three' src={ft} alt='' />
                        <div className='vertical-bottom-one-bypass-to-wellpad-vessel-three'>
                            <Vertical />
                        </div>
                        <div className='bow-bottom-one-bypass-to-wellpad-vessel-three'>
                            <Bowtopleft />
                        </div>
                        <div className='horizontal-bottom-one-bypass-to-wellpad-vessel-three'>
                            <Horizontal />
                        </div>
                        <img className='ft-bottom-one-bypass-to-wellpad-vessel-three' src={ft} alt='' />
                        <div className='horizontal-bottom-two-bypass-to-wellpad-vessel-three'>
                            <Horizontal />
                        </div>
                        <div className='bow-bottom-two-bypass-to-wellpad-vessel-three'>
                            <Bowtopleft />
                        </div>
                        <div className='vertical-bottom-two-bypass-to-wellpad-vessel-three'>
                            <Vertical />
                        </div>
                        <div className='horizontal-bottom-two-to-wellpad-vessel-three'>
                            <Horizontal />
                        </div>
                        <img className='lcv-bottom-one-to-wellpad-vessel-three' src={lcv} alt='' />
                        <div className='horizontal-bottom-three-to-wellpad-vessel-three'>
                            <Horizontal />
                        </div>
                    </div>


                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Testseparator