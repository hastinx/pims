import React, { useState } from 'react'
import peta from '../../assets/img/peta.png'
import pin from '../../assets/img/pin.png'
import pada from '../../assets/img/mudipada.png'
import padb from '../../assets/img/mudipadb.png'
import padc from '../../assets/img/mudipadc.png'
import './peta.css'

const PetaLokasi = ({ urls }) => {
    const [isShown1, setShown1] = useState(false)
    const [isShown2, setShown2] = useState(false)
    const [isShown3, setShown3] = useState(false)

    const handleClick = (id) => {

    }
    return (
        <>
            <div className='peta-wrapper'>
                <img src={peta} alt='' className='peta-full' />
                <div className='pin-peta-1' onClick={() => isShown1 ? setShown1(false) : (setShown1(true), setShown2(false), setShown3(false))}>
                    <img src={pin} alt='' className='pin' />
                    <div className='label-tag'>
                        Mudi Pad B
                    </div>
                </div>
                <div className='pin-peta-2' onClick={() => isShown2 ? setShown2(false) : (setShown2(true), setShown1(false), setShown3(false))}>
                    <img src={pin} alt='' className='pin' />
                    <div className='label-tag'>
                        Mudi Pad A
                    </div>
                </div>
                <div className='pin-peta-3' onClick={() => isShown3 ? setShown3(false) : (setShown2(false), setShown1(false), setShown3(true))}>
                    <img src={pin} alt='' className='pin' />
                    <div className='label-tag'>
                        Mudi Pad C
                    </div>
                </div>


                <div className='show-location-1' style={{ display: (isShown1 ? 'block' : 'none') }}>
                    <img src={padb} alt='' className='location-detail' />
                </div>
                <div className='show-location-2' style={{ display: (isShown2 ? 'block' : 'none') }}>
                    <img src={pada} alt='' className='location-detail' />
                </div>
                <div className='show-location-3' style={{ display: (isShown3 ? 'block' : 'none') }}>
                    <img src={padc} alt='' className='location-detail' />
                </div>
            </div>


        </>
    )
}

export default PetaLokasi