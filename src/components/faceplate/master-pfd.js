import React from 'react'
import wellhead from '../../assets/img/faceplate/wellhead-stop.png'
import valve from '../../assets/img/faceplate/valve.png'
import Vertical from './pipe/Vertical'
import Blackboxstop from './blackbox/Blackboxstop'
import Horizontal from './pipe/Horizontal'
import pcv from '../../assets/img/faceplate/pcv-run.png'
import pcvstop from '../../assets/img/faceplate/pcv-stop.png'
import sv from '../../assets/img/faceplate/sv.png'
import arrow from '../../assets/img/faceplate/arrow.png'
import pl from '../../assets/img/faceplate/pl.png'
import knife from '../../assets/img/faceplate/knife.png'
import Tankhorizontal from '../../assets/img/faceplate/ht.png'
import Tankvertical from '../../assets/img/faceplate/vt.png'
import olc from '../../assets/img/faceplate/olc.png'
import ilc from '../../assets/img/faceplate/ilc.png'
import es from '../../assets/img/faceplate/electric-signal.png'
import cv from '../../assets/img/faceplate/cv.png'
import meter from '../../assets/img/faceplate/meter.png'
import flare from '../../assets/img/faceplate/flare.png'
import pumptl from '../../assets/img/faceplate/pump-tl.png'
import plank from '../../assets/img/faceplate/plank.png'
import './pfd.css'

function Pfd() {
    return (
        <>
            <div className="card border-secondary" style={{ height: '300px' }}>
                <div className="card-header fw-semibold text-center text-white bg-secondary">
                    MUDI PAD A - PFD
                </div>
                <div className="card-body">
                    <div className='pfd-vertical-to-valve'>
                        <Vertical />
                    </div>
                    <img alt='' className='pfd-valve' src={valve} />
                    <div className='pfd-blackboxstop'>
                        <Blackboxstop />
                    </div>
                    <img alt='' className='pfd-wellhead' src={wellhead} />
                    <div className='pfd-horizontal-from-boxstop'>
                        <Horizontal />
                    </div>
                    <img alt='' src={pcv} className='pfd-sdv-to-sv' />
                    <div className='pfd-horizontal-from-sdv-to-sv'>
                        <Horizontal />
                    </div>
                    <img src={sv} alt='' className='pfd-sv' />
                    <div className='pfd-vertical-from-sv'>
                        <Vertical />
                    </div>
                    <div className='pfd-horizontal-from-sv-to-prod-manifold'>
                        <Horizontal />
                    </div>
                    <img src={arrow} alt='' className='pfd-arrow-top-one' />
                    <div className='pfd-vertical-from-sv-to-test-manifold'>
                        <Vertical />
                    </div>
                    <div className='pfd-horizontal-from-sv-to-test-manifold'>
                        <Horizontal />
                    </div>
                    <img src={arrow} alt='' className='pfd-arrow-top-two' />
                    <div className='pfd-horizontal-from-sv-to-prod-manifold-middle'>
                        <Horizontal />
                    </div>
                    <img src={arrow} alt='' className='pfd-arrow-middle-one' />
                    <div className='pfd-vertical-from-sv-to-test-manifold-middle'>
                        <Vertical />
                    </div>
                    <div className='pfd-horizontal-from-sv-to-test-manifold-middle'>
                        <Horizontal />
                    </div>
                    <img src={arrow} alt='' className='pfd-arrow-middle-two' />
                    <div className='pfd-horizontal-from-sv-to-prod-manifold-bottom'>
                        <Horizontal />
                    </div>
                    <img src={arrow} alt='' className='pfd-arrow-bottom-one' />
                    <div className='pfd-vertical-from-sv-to-test-manifold-bottom'>
                        <Vertical />
                    </div>
                    <div className='pfd-horizontal-from-sv-to-test-manifold-bottom'>
                        <Horizontal />
                    </div>
                    <img src={arrow} alt='' className='pfd-arrow-bottom-two' />
                    <div className='pfd-horizontal-from-prod-manifold-to-piglaouncher'>
                        <Horizontal />
                    </div>
                    <img src={arrow} alt='' className='pfd-arrow-from-prod-manifold-to-piglaouncher-one' />
                    <div className='pfd-vertical-from-prod-manifold-to-piglaouncher'>
                        <Vertical />
                    </div>
                    <div className='pfd-horizontal-from-prod-manifold-to-piglaouncher-one'>
                        <Horizontal />
                    </div>
                    <div className='pfd-vertical-from-prod-manifold-to-piglaouncher-one'>
                        <Vertical />
                    </div>
                    <img src={pl} alt='' className='pfd-piglaouncher' />
                    <div className='pfd-horizontal-from-piglaouncher'>
                        <Horizontal />
                    </div>
                    <div className='pfd-vertical-from-prod-manifold-to-cpa'>
                        <Vertical />
                    </div>
                    <img src={arrow} alt='' className='pfd-arrow-from-prod-manifold-to-piglaouncher-two' />
                    <img src={arrow} alt='' className='pfd-arrow-from-prod-manifold-to-cpa' />
                    <img src={arrow} alt='' className='pfd-arrow-from-prod-manifold-to-cpa-down' />
                    <img src={plank} alt='' className='pfd-plank-top-prod-manifold' />
                    <div className='pfd-vertical-prod-manifold'>
                        <Vertical />
                    </div>
                    <img src={plank} alt='' className='pfd-plank-bottom-prod-manifold' />
                    <img src={plank} alt='' className='pfd-plank-top-test-manifold' />
                    <div className='pfd-vertical-test-manifold'>
                        <Vertical />
                    </div>
                    <img src={plank} alt='' className='pfd-plank-bottom-test-manifold' />
                    <img className='pfd-tank-horizontal' src={Tankhorizontal} alt='' />
                    <div className='pfd-horizontal-from-test-manifold-to-sdv'>
                        <Horizontal />
                    </div>
                    <img src={pcvstop} alt='' className='pfd-sdv-to-test-separator' />
                    <div className='pfd-horizontal-from-sdv-to-test-separator'>
                        <Horizontal />
                    </div>
                    <div className='pfd-vertical-from-sdv-to-test-separator'>
                        <Vertical />
                    </div>
                    <img src={arrow} alt='' className='pfd-arrow-from-sdv-to-test-separator-down' />
                    <div className='pfd-vertical-from-test-separator-to-knife'>
                        <Vertical />
                    </div>
                    <img src={arrow} alt='' className='pfd-arrow-from-test-separator-to-knife-up' />
                    <div className='pfd-horizontal-from-test-separator-to-knife'>
                        <Horizontal />
                    </div>
                    <img src={knife} alt='' className='pfd-knife-from-test-separator' />
                    <div className='pfd-horizontal-from-knife-to-prod-manifold'>
                        <Horizontal />
                    </div>
                    <img src={arrow} alt='' className='pfd-arrow-from-knife-to-prod-manifold' />
                    <div className='pfd-vertical-from-knife-to-prod-manifold'>
                        <Vertical />
                    </div>
                    <img src={arrow} alt='' className='pfd-arrow-from-knife-to-prod-manifold-down' />
                    <div className='pfd-horizontal-from-knife-from-vertical-to-prod-manifold'>
                        <Horizontal />
                    </div>
                    <img src={arrow} alt='' className='pfd-arrow-from-knife-to-prod-manifold-left' />
                    <img src={Tankvertical} alt='' className='pfd-tank-vertical' />
                    <div className='pfd-horizontal-to-olc'>
                        <Horizontal />
                    </div>
                    <img src={olc} alt='' className='pfd-olc' />
                    <div className='pfd-horizontal-from-olc'>
                        <Horizontal />
                    </div>
                    <img src={es} alt='' className='pfd-es-from-olc' />
                    <img src={es} alt='' className='pfd-es-from-olc-horizontal' />

                    <div className='pfd-horizontal-from-dlcv-to-valve'>
                        <Horizontal />
                    </div>
                    <div className='pfd-vertical-from-olc-es-to-dlcv'>
                        <Vertical />
                    </div>
                    <img src={valve} alt='' className='pfd-valve-from-dlcv-to-prod-manifold' />
                    <img src={arrow} alt='' className='pfd-arrow-from-dlcv-to-prod-manifold' />
                    <div className='pfd-vertical-from-dlcv-to-valve-up'>
                        <Vertical />
                    </div>
                    <div className='pfd-horizontal-from-dlcv-vertical-to-valve-up'>
                        <Horizontal />
                    </div>
                    <img src={valve} alt='' className='pfd-valve-from-dlcv-to-sdv' />
                    <div className='pfd-horizontal-from-dlcv-valve-up-to-sdv'>
                        <Horizontal />
                    </div>
                    <img src={pcvstop} alt='' className='pfd-sdv-from-dlcv-to-gauging' />
                    <div className='pfd-horizontal-from-filter-to-dlcv'>
                        <Horizontal />
                    </div>
                    <img src={cv} alt='' className='pfd-dlcv-from-es-olc' />
                    <img src={meter} alt='' className='pfd-filter-to-dlcv' />
                    <div className='pfd-horizontal-from-test-separator-to-filter'>
                        <Horizontal />
                    </div>
                    <div className='pfd-vertical-from-test-separator-to-filter-down'>
                        <Vertical />
                    </div>
                    <img src={arrow} alt='' className='pfd-arrow-from-test-separator-to-filter-down' />
                    <div className='pfd-horizontal-from-test-separator-to-ilc'>
                        <Horizontal />
                    </div>
                    <img src={ilc} alt='' className='pfd-ilc' />
                    <img src={es} alt='' className='pfd-es-from-ilc' />
                    <img src={es} alt='' className='pfd-es-from-ilc-horizontal' />
                    <img src={es} alt='' className='pfd-es-from-ilc-horizontal-extend' />
                    <img src={es} alt='' className='pfd-es-from-ilc-to-ilcv' />
                    <img src={cv} alt='' className='pfd-ilcv-from-ilc' />
                    <div className='pfd-horizontal-from-test-separator-to-ilcv'>
                        <Horizontal />
                    </div>
                    <img src={meter} alt='' className='pfd-filter-to-ilcv' />
                    <div className='pfd-horizontal-from-test-separator-to-filter-to-ilcv'>
                        <Horizontal />
                    </div>
                    <div className='pfd-vertical-from-test-separator-to-filter-to-ilcv-down'>
                        <Vertical />
                    </div>
                    <div className='pfd-horizontal-from-ilcv'>
                        <Horizontal />
                    </div>
                    <img src={valve} alt='' className='pfd-valve-from-ilcv' />
                    <img src={arrow} alt='' className='pfd-arrow-from-ilcv-valve' />
                    <div className='pfd-vertical-from-ilcv-up-to-sdv'>
                        <Vertical />
                    </div>
                    <img src={valve} alt='' className='pfd-valve-from-ilcv-up-to-sdv' />
                    <div className='pfd-vertical-from-valve-up-to-sdv'>
                        <Vertical />
                    </div>
                    <div className='pfd-horizontal-from-valve-up-to-sdv'>
                        <Horizontal />
                    </div>
                    <div className='pfd-vertical-from-valve-horizontal-up-to-sdv'>
                        <Vertical />
                    </div>
                    <div className='pfd-horizontal-from-gauging-to-flare'>
                        <Horizontal />
                    </div>
                    <img src={flare} alt='' className='pfd-flare' />
                    <div className='pfd-vertical-from-gauging-to-pump'>
                        <Vertical />
                    </div>
                    <img src={pumptl} alt='' className='pfd-pump' />
                    <div className='pfd-horizontal-from-pump-to-pipe'>
                        <Horizontal />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pfd