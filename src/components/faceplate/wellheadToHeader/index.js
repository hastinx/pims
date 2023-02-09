import React from 'react';
import './wellheadToHeader.css'

import wellon from '../../../assets/img/faceplate/wellhead-run.png'
import pcv from '../../../assets/img/faceplate/pcv-run.png'
import pl from '../../../assets/img/faceplate/pl.png'
import pt from '../../../assets/img/faceplate/gauge.png'
import tt from '../../../assets/img/faceplate/gauge.png'
import plank from '../../../assets/img/faceplate/plank.png'
import coriolis from '../../../assets/img/faceplate/coriolis.png'
import arrow from '../../../assets/img/faceplate/arrow.png'
import Horizontal from '../pipe/Horizontal';
import Vertical from '../pipe/Vertical';

const WellheadToHeader = () => {
    return (
        <div className='wh-to-header-wrapper'>
            <img src={wellon} alt='' className='wh-to-header-wellhead-1' />
            <img src={pcv} alt='' className='wh-to-header-valve-1' />
            <div className='wh-to-header-horizontal-1'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-2'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-3'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-4'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-5'>
                <Horizontal />
            </div>
            <div className='wh-to-header-tag-from-1'>
                <span className='span-text'>PRODUCTION</span>
                <span className='span-text'>HEADER MANIFOLD</span>
                <span className='span-text'>MUDI A</span>
            </div>
            <div className='wh-to-header-vertical-1'>
                <Vertical />
            </div>
            <div className='wh-to-header-vertical-2'>
                <Vertical />
            </div>
            <img src={pl} alt='' className='wh-to-header-pl-1' />
            <img src={pl} alt='' className='wh-to-header-pl-2' />
            <img src={coriolis} alt='' className='wh-to-header-coriolis-1' />
            <img src={coriolis} alt='' className='wh-to-header-coriolis-2' />
            <img src={pt} alt='' className='wh-to-header-pt-1' />
            <img src={tt} alt='' className='wh-to-header-tt-1' />
            <img src={plank} alt='' className='wh-to-header-plank-1' />
            <img src={plank} alt='' className='wh-to-header-plank-2' />
            <div className='wh-to-header-label-1'>
                <div className='label-tag'>Wellhead MUDI A</div>
            </div>
            <div className='wh-to-header-label-2'>
                <div className='label-tag'>ESDV</div>
            </div>
            <div className='wh-to-header-label-3'>
                <div className='span-text'>PIG LAUNCHER</div>
            </div>
            <div className='wh-to-header-label-4'>
                <div className='span-text'>PIG RECEIVER</div>
            </div>
            {/* ================================================================================================= */}
            <img src={wellon} alt='' className='wh-to-header-wellhead-2' />
            <img src={pcv} alt='' className='wh-to-header-valve-2' />
            <div className='wh-to-header-horizontal-6'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-7'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-8'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-9'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-10'>
                <Horizontal />
            </div>
            <div className='wh-to-header-tag-from-2'>
                <span className='span-text'>PRODUCTION</span>
                <span className='span-text'>HEADER MANIFOLD</span>
                <span className='span-text'>MUDI B</span>
            </div>
            <div className='wh-to-header-vertical-3'>
                <Vertical />
            </div>
            <div className='wh-to-header-vertical-4'>
                <Vertical />
            </div>
            <img src={pl} alt='' className='wh-to-header-pl-3' />
            <img src={pl} alt='' className='wh-to-header-pl-4' />
            <img src={coriolis} alt='' className='wh-to-header-coriolis-3' />
            <img src={coriolis} alt='' className='wh-to-header-coriolis-4' />
            <img src={pt} alt='' className='wh-to-header-pt-2' />
            <img src={tt} alt='' className='wh-to-header-tt-2' />
            <img src={plank} alt='' className='wh-to-header-plank-3' />
            <img src={plank} alt='' className='wh-to-header-plank-4' />
            <div className='wh-to-header-label-5'>
                <div className='label-tag'>Wellhead MUDI B</div>
            </div>
            <div className='wh-to-header-label-6'>
                <div className='label-tag'>ESDV</div>
            </div>
            <div className='wh-to-header-label-7'>
                <div className='span-text'>PIG LAUNCHER</div>
            </div>
            <div className='wh-to-header-label-8'>
                <div className='span-text'>PIG RECEIVER</div>
            </div>
            {/* ========================================================================================================================================= */}
            <img src={wellon} alt='' className='wh-to-header-wellhead-3' />
            <img src={pcv} alt='' className='wh-to-header-valve-3' />
            <div className='wh-to-header-horizontal-11'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-12'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-13'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-14'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-15'>
                <Horizontal />
            </div>
            <div className='wh-to-header-tag-from-3'>
                <span className='span-text'>PRODUCTION</span>
                <span className='span-text'>HEADER MANIFOLD</span>
                <span className='span-text'>MUDI C</span>
            </div>
            <div className='wh-to-header-vertical-5'>
                <Vertical />
            </div>
            <div className='wh-to-header-vertical-6'>
                <Vertical />
            </div>
            {/* <img src={pl} alt='' className='wh-to-header-pl-5' />
            <img src={pl} alt='' className='wh-to-header-pl-6' /> */}
            {/* <img src={coriolis} alt='' className='wh-to-header-coriolis-5' />
            <img src={coriolis} alt='' className='wh-to-header-coriolis-6' /> */}
            {/* <img src={pt} alt='' className='wh-to-header-pt-3' />
            <img src={tt} alt='' className='wh-to-header-tt-3' /> */}
            <img src={plank} alt='' className='wh-to-header-plank-5' />
            <img src={plank} alt='' className='wh-to-header-plank-6' />
            <img src={plank} alt='' className='wh-to-header-plank-51' />
            <img src={plank} alt='' className='wh-to-header-plank-61' />
            <div className='wh-to-header-label-9'>
                <div className='label-tag'>Wellhead MUDI C</div>
            </div>
            <div className='wh-to-header-label-10'>
                <div className='label-tag'>ESDV</div>
            </div>
            {/* <div className='wh-to-header-label-11'>
                <div className='span-text'>PIG LAUNCHER</div>
            </div>
            <div className='wh-to-header-label-12'>
                <div className='span-text'>PIG RECEIVER</div>
            </div> */}
            {/* ========================================================================================================================================= */}
            <img src={wellon} alt='' className='wh-to-header-wellhead-4' />
            {/* <img src={pcv} alt='' className='wh-to-header-valve-4' /> */}
            <div className='wh-to-header-horizontal-16'>
                <Horizontal />
            </div>
            {/* <div className='wh-to-header-horizontal-17'>
                <Horizontal />
            </div> */}
            <div className='wh-to-header-horizontal-18'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-19'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-20'>
                <Horizontal />
            </div>
            <div className='wh-to-header-tag-from-4'>
                <span className='span-text'>WATER INJECTION</span>
                <span className='span-text'>HEADER MANIFOLD</span>
                <span className='span-text'>MUDI C</span>
            </div>
            <div className='wh-to-header-vertical-7'>
                <Vertical />
            </div>
            <div className='wh-to-header-vertical-8'>
                <Vertical />
            </div>
            <img src={pl} alt='' className='wh-to-header-pl-7' />
            <img src={pl} alt='' className='wh-to-header-pl-8' />
            <img src={coriolis} alt='' className='wh-to-header-coriolis-7' />
            <img src={coriolis} alt='' className='wh-to-header-coriolis-8' />
            <img src={pt} alt='' className='wh-to-header-pt-4' />
            <img src={tt} alt='' className='wh-to-header-tt-4' />
            <img src={plank} alt='' className='wh-to-header-plank-7' />
            <img src={plank} alt='' className='wh-to-header-plank-8' />
            <div className='wh-to-header-label-13'>
                <div className='label-tag'>Wellhead MUDI C</div>
            </div>
            {/* <div className='wh-to-header-label-14'>
                <div className='label-tag'>ESDV</div>
            </div> */}
            <div className='wh-to-header-label-15'>
                <div className='span-text'>PIG RECEIVER</div>
            </div>
            <div className='wh-to-header-label-16'>
                <div className='span-text'>PIG LAUNCHER</div>
            </div>
            {/* ========================================================================================================================================= */}
            {/* <div className='wh-to-header-horizontal-21'>
                <Horizontal />
            </div> */}
            <div className='wh-to-header-horizontal-22'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-23'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-24'>
                <Horizontal />
            </div>
            <div className='wh-to-header-horizontal-25'>
                <Horizontal />
            </div>
            <div className='wh-to-header-tag-from-5'>
                <span className='span-text'>WATER INJECTION</span>
                <span className='span-text'>HEADER MANIFOLD</span>
                <span className='span-text'>MUDI C</span>
            </div>
            <div className='wh-to-header-vertical-9'>
                <Vertical />
            </div>
            <div className='wh-to-header-vertical-10'>
                <Vertical />
            </div>
            <div className='wh-to-header-vertical-11'>
                <Vertical />
            </div>
            <img src={pl} alt='' className='wh-to-header-pl-9' />
            <img src={pl} alt='' className='wh-to-header-pl-10' />
            <img src={coriolis} alt='' className='wh-to-header-coriolis-9' />
            <img src={coriolis} alt='' className='wh-to-header-coriolis-10' />
            <img src={pt} alt='' className='wh-to-header-pt-5' />
            <img src={tt} alt='' className='wh-to-header-tt-5' />
            <img src={plank} alt='' className='wh-to-header-plank-9' />
            <img src={plank} alt='' className='wh-to-header-plank-10' />
            <div className='wh-to-header-label-17'>
                <div className='label-tag'>Wellhead MUDI C</div>
            </div>
            {/* <div className='wh-to-header-label-18'>
                <div className='label-tag'>ESDV</div>
            </div> */}
            <div className='wh-to-header-label-19'>
                <div className='span-text'>PIG RECEIVER</div>
            </div>
            <div className='wh-to-header-label-20'>
                <div className='span-text'>PIG LAUNCHER</div>
            </div>
            {/* ========================================================================================================================================= */}

            <div className='wh-to-header-header'>
                <div className='span-text-large'>CENTRAL</div>
                <div className='span-text-large'>PROCESSING</div>
                <div className='span-text-large'>AREA</div>
            </div>
            <img src={arrow} alt='' className='wh-to-header-arrow-1' />
            <img src={arrow} alt='' className='wh-to-header-arrow-2' />
            <img src={arrow} alt='' className='wh-to-header-arrow-3' />
            <img src={arrow} alt='' className='wh-to-header-arrow-4' />
            <img src={arrow} alt='' className='wh-to-header-arrow-5' />
            <img src={arrow} alt='' className='wh-to-header-arrow-6' />
            <img src={arrow} alt='' className='wh-to-header-arrow-7' />
            <img src={arrow} alt='' className='wh-to-header-arrow-8' />
            <img src={arrow} alt='' className='wh-to-header-arrow-9' />
            <img src={arrow} alt='' className='wh-to-header-arrow-10' />
            <img src={arrow} alt='' className='wh-to-header-arrow-11' />

            <div className='wh-to-header-label-21'>
                <div className='label-tag'>PT</div>
            </div>
            <div className='wh-to-header-label-22'>
                <div className='label-tag'>TT</div>
            </div>
            <div className='wh-to-header-label-23'>
                <div className='label-tag'>PT</div>
            </div>
            <div className='wh-to-header-label-24'>
                <div className='label-tag'>TT</div>
            </div>
            <div className='wh-to-header-label-25'>
                <div className='label-tag'>PT</div>
            </div>
            <div className='wh-to-header-label-26'>
                <div className='label-tag'>TT</div>
            </div>
            <div className='wh-to-header-label-27'>
                <div className='label-tag'>PT</div>
            </div>
            <div className='wh-to-header-label-28'>
                <div className='label-tag'>TT</div>
            </div>
        </div>
    )
}

export default WellheadToHeader