import React from 'react';
import './testseparator-large.css'
import Tankhorizontal from '../../assets/img/faceplate/ht.png'
import Horizontal from './pipe/Horizontal'
import Vertical from './pipe/Vertical'
import Bowtopleft from './pipe/Bowtopleft'
import pcv from '../../assets/img/faceplate/pcv-run.png'
import ft from '../../assets/img/faceplate/ft.png'
import lcv from '../../assets/img/faceplate/lcv.png'
import Bowbottomleft from './pipe/Bowbottomleft'

function Testseparatorlarge(props) {
    return (
        <>
            <div className="card border-secondary large" style={{}}>
                <div className="card-header fw-semibold text-center text-white bg-secondary">
                    {props.title}
                </div>
                <div className="card-body h-100">
                    <div>
                        <img className='large-testseparator-tank-horizontal' src={Tankhorizontal} alt='' />
                    </div>
                    <div className='d-flex'>
                        <div className='d-flex flex-column'>
                            <div className='large-testseparator-top-left-bow'>
                                <Bowtopleft />
                            </div>
                            <div className='large-testseparator-vertical-left-one'>
                                <Vertical />
                            </div>
                            <div className='large-testseparator-vertical-left-two'>
                                <Vertical />
                            </div>
                        </div>
                        <img className='large-testseparator-pcv-bdv1151' src={pcv} alt='' />
                        <img className='large-testseparator-pcv-esdv1151' src={pcv} alt='' />
                        <div className='large-testseparator-horizontal-top'>
                            <Horizontal />
                        </div>
                        <div className='large-testseparator-horizontal-bottom-one'>
                            <Horizontal />
                        </div>
                        <div className='large-testseparator-horizontal-bottom-two'>
                            <Horizontal />
                        </div>
                        <div className='large-testseparator-bottom-rigth-bow'>
                            <Bowtopleft />
                        </div>
                        <div className='large-testseparator-vertical-left-three'>
                            <Vertical />
                        </div>
                        <div className='large-testseparator-bottom-left-bow-to-tank'>
                            <Bowtopleft />
                        </div>
                        <div className='large-testseparator-horizontal-bottom-to-tank'>
                            <Horizontal />
                        </div>
                        <div className='large-testseparator-vertical-top-to-separator'>
                            <Vertical />
                        </div>
                        <div className='large-testseparator-bow-top-one-to-separator'>
                            <Bowtopleft />
                        </div>
                        <div className='large-testseparator-horizontal-top-one-to-separator'>
                            <Horizontal />
                        </div>
                        <div className='large-testseparator-vertical-top-to-wellpad-vessel-one'>
                            <Vertical />
                        </div>
                        <div className='large-testseparator-bow-top-one-to-wellpad-vessel-one'>
                            <Bowtopleft />
                        </div>
                        <div className='large-testseparator-horizontal-top-one-to-wellpad-vessel-one'>
                            <Horizontal />
                        </div>
                        <div className='large-testseparator-bow-top-two-to-wellpad-vessel-one'>
                            <Bowtopleft />
                        </div>
                        <div className='large-testseparator-vertical-right-to-wellpad-vessel-one'>
                            <Vertical />
                        </div>
                        <div className='large-testseparator-bow-right-one-to-wellpad-vessel-one'>
                            <Bowbottomleft />
                        </div>
                        <div className='large-testseparator-horizontal-right-one-to-wellpad-vessel-one'>
                            <Horizontal />
                        </div>
                        <img className='large-testseparator-lcv-right-one-to-wellpad-vessel-one' src={lcv} alt='' />
                        <div className='large-testseparator-horizontal-right-two-to-wellpad-vessel-one'>
                            <Horizontal />
                        </div>
                        <div className='large-testseparator-vertical-right-one-to-wellpad-vessel-one'>
                            <Vertical />
                        </div>
                        <div className='large-testseparator-bow-right-baypass-one-to-wellpad-vessel-one'>
                            <Bowtopleft />
                        </div>
                        <div className='large-testseparator-horizontal-right-bypass-one-to-wellpad-vessel-one'>
                            <Horizontal />
                        </div>
                        <img className='large-testseparator-lcv-right-bypass-one-to-wellpad-vessel-one' src={lcv} alt='' />
                        <div className='large-testseparator-horizontal-right-bypass-two-to-wellpad-vessel-one'>
                            <Horizontal />
                        </div>
                        <div className='large-testseparator-bow-right-baypass-two-to-wellpad-vessel-one'>
                            <Bowtopleft />
                        </div>
                        <div className='large-testseparator-vertical-right-two-to-wellpad-vessel-one'>
                            <Vertical />
                        </div>
                        <div className='large-testseparator-vertical-bottom-one-to-wellpad-vessel-two'>
                            <Vertical />
                        </div>
                        <div className='large-testseparator-bow-bottom-one-to-wellpad-vessel-two'>
                            <Bowbottomleft />
                        </div>
                        <div className='large-testseparator-horizontal-bottom-one-to-wellpad-vessel-two'>
                            <Horizontal />
                        </div>
                        <img className='large-testseparator-ft-bottom-one-to-wellpad-vessel-two' src={ft} alt='' />
                        <div className='large-testseparator-vertical-bottom-one-bypass-to-wellpad-vessel-two'>
                            <Vertical />
                        </div>
                        <div className='large-testseparator-bow-bottom-one-bypass-to-wellpad-vessel-two'>
                            <Bowtopleft />
                        </div>
                        <div className='large-testseparator-horizontal-bottom-one-bypass-to-wellpad-vessel-two'>
                            <Horizontal />
                        </div>
                        <img className='large-testseparator-ft-bottom-one-bypass-to-wellpad-vessel-two' src={ft} alt='' />
                        <div className='large-testseparator-horizontal-bottom-two-bypass-to-wellpad-vessel-two'>
                            <Horizontal />
                        </div>
                        <div className='large-testseparator-bow-bottom-two-bypass-to-wellpad-vessel-two'>
                            <Bowtopleft />
                        </div>
                        <div className='large-testseparator-vertical-bottom-two-bypass-to-wellpad-vessel-two'>
                            <Vertical />
                        </div>
                        <div className='large-testseparator-horizontal-bottom-two-to-wellpad-vessel-two'>
                            <Horizontal />
                        </div>
                        <img className='large-testseparator-lcv-bottom-one-to-wellpad-vessel-two' src={lcv} alt='' />
                        <div className='large-testseparator-horizontal-bottom-three-to-wellpad-vessel-two'>
                            <Horizontal />
                        </div>
                        {/*TO WELLPAD VESSEL THREE (BOTTOM) */}
                        <div className='large-testseparator-vertical-bottom-one-to-wellpad-vessel-three'>
                            <Vertical />
                        </div>
                        <div className='large-testseparator-bow-bottom-one-to-wellpad-vessel-three'>
                            <Bowbottomleft />
                        </div>
                        <div className='large-testseparator-horizontal-bottom-one-to-wellpad-vessel-three'>
                            <Horizontal />
                        </div>
                        <img className='large-testseparator-ft-bottom-one-to-wellpad-vessel-three' src={ft} alt='' />
                        <div className='large-testseparator-vertical-bottom-one-bypass-to-wellpad-vessel-three'>
                            <Vertical />
                        </div>
                        <div className='large-testseparator-bow-bottom-one-bypass-to-wellpad-vessel-three'>
                            <Bowtopleft />
                        </div>
                        <div className='large-testseparator-horizontal-bottom-one-bypass-to-wellpad-vessel-three'>
                            <Horizontal />
                        </div>
                        <img className='large-testseparator-ft-bottom-one-bypass-to-wellpad-vessel-three' src={ft} alt='' />
                        <div className='large-testseparator-horizontal-bottom-two-bypass-to-wellpad-vessel-three'>
                            <Horizontal />
                        </div>
                        <div className='large-testseparator-bow-bottom-two-bypass-to-wellpad-vessel-three'>
                            <Bowtopleft />
                        </div>
                        <div className='large-testseparator-vertical-bottom-two-bypass-to-wellpad-vessel-three'>
                            <Vertical />
                        </div>
                        <div className='large-testseparator-horizontal-bottom-two-to-wellpad-vessel-three'>
                            <Horizontal />
                        </div>
                        <img className='large-testseparator-lcv-bottom-one-to-wellpad-vessel-three' src={lcv} alt='' />
                        <div className='large-testseparator-horizontal-bottom-three-to-wellpad-vessel-three'>
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

export default Testseparatorlarge