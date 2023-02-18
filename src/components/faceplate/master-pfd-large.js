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
import './pfd-copy.css'
import LabelTag from './labelMonitor/labelTag'

function PfdLarge(props) {
    return (
        <>
            <div className="card border-secondary large">
                <div className="card-header fw-semibold text-center text-white bg-secondary">
                    MUDI PAD A - PFD
                </div>
                <div className="card-body bg-gray">
                    <div className='wrapper'>
                        <div className='large-pfd-vertical-to-valve'>
                            <Vertical />
                        </div>
                        <img alt='' className='large-pfd-valve' src={valve} />
                        <div className='large-pfd-blackboxstop'>
                            <Blackboxstop />
                        </div>
                        <img alt='' className='large-pfd-wellhead' src={wellhead} />
                        <div className='large-pfd-horizontal-from-boxstop'>
                            <Horizontal />
                        </div>
                        <img alt='' src={pcv} className='large-pfd-sdv-to-sv' />
                        <div className='large-pfd-horizontal-from-sdv-to-sv'>
                            <Horizontal />
                        </div>
                        <img src={sv} alt='' className='large-pfd-sv' />
                        <div className='large-pfd-vertical-from-sv'>
                            <Vertical />
                        </div>
                        <div className='large-pfd-horizontal-from-sv-to-prod-manifold'>
                            <Horizontal />
                        </div>
                        <img src={arrow} alt='' className='large-pfd-arrow-top-one' />
                        <div className='large-pfd-vertical-from-sv-to-test-manifold'>
                            <Vertical />
                        </div>
                        <div className='large-pfd-horizontal-from-sv-to-test-manifold'>
                            <Horizontal />
                        </div>
                        <img src={arrow} alt='' className='large-pfd-arrow-top-two' />
                        {/* <div className='large-pfd-horizontal-from-sv-to-prod-manifold-middle'>
                            <Horizontal />
                        </div> */}
                        {/* <img src={arrow} alt='' className='large-pfd-arrow-middle-one' />
                        <div className='large-pfd-vertical-from-sv-to-test-manifold-middle'>
                            <Vertical />
                        </div>
                        <div className='large-pfd-horizontal-from-sv-to-test-manifold-middle'>
                            <Horizontal />
                        </div>
                        <img src={arrow} alt='' className='large-pfd-arrow-middle-two' />
                        <div className='large-pfd-horizontal-from-sv-to-prod-manifold-bottom'>
                            <Horizontal />
                        </div> */}
                        {/* <img src={arrow} alt='' className='large-pfd-arrow-bottom-one' />
                        <div className='large-pfd-vertical-from-sv-to-test-manifold-bottom'>
                            <Vertical />
                        </div>
                        <div className='large-pfd-horizontal-from-sv-to-test-manifold-bottom'>
                            <Horizontal />
                        </div> */}
                        {/* <img src={arrow} alt='' className='large-pfd-arrow-bottom-two' /> */}
                        <div className='large-pfd-horizontal-from-prod-manifold-to-piglaouncher'>
                            <Horizontal />
                        </div>
                        <img src={arrow} alt='' className='large-pfd-arrow-from-prod-manifold-to-piglaouncher-one' />
                        <div className='large-pfd-vertical-from-prod-manifold-to-piglaouncher'>
                            <Vertical />
                        </div>
                        <div className='large-pfd-horizontal-from-prod-manifold-to-piglaouncher-one'>
                            <Horizontal />
                        </div>
                        <div className='large-pfd-vertical-from-prod-manifold-to-piglaouncher-one'>
                            <Vertical />
                        </div>
                        <img src={pl} alt='' className='large-pfd-piglaouncher' />
                        <div className='large-pfd-horizontal-from-piglaouncher'>
                            <Horizontal />
                        </div>
                        <div className='large-pfd-vertical-from-prod-manifold-to-cpa'>
                            <Vertical />
                        </div>
                        <img src={arrow} alt='' className='large-pfd-arrow-from-prod-manifold-to-piglaouncher-two' />
                        <img src={arrow} alt='' className='large-pfd-arrow-from-prod-manifold-to-cpa' />
                        <img src={arrow} alt='' className='large-pfd-arrow-from-prod-manifold-to-cpa-down' />
                        <img src={plank} alt='' className='large-pfd-plank-top-prod-manifold' />
                        <div className='large-pfd-vertical-prod-manifold'>
                            <Vertical />
                        </div>
                        <img src={plank} alt='' className='large-pfd-plank-bottom-prod-manifold' />
                        <img src={plank} alt='' className='large-pfd-plank-top-test-manifold' />
                        <div className='large-pfd-vertical-test-manifold'>
                            <Vertical />
                        </div>
                        <img src={plank} alt='' className='large-pfd-plank-bottom-test-manifold' />
                        <img className='large-pfd-tank-horizontal' src={Tankhorizontal} alt='' />
                        <div className='large-pfd-horizontal-from-test-manifold-to-sdv'>
                            <Horizontal />
                        </div>
                        <img src={pcvstop} alt='' className='large-pfd-sdv-to-test-separator' />
                        <div className='large-pfd-horizontal-from-sdv-to-test-separator'>
                            <Horizontal />
                        </div>
                        <div className='large-pfd-vertical-from-sdv-to-test-separator'>
                            <Vertical />
                        </div>
                        <img src={arrow} alt='' className='large-pfd-arrow-from-sdv-to-test-separator-down' />
                        <div className='large-pfd-vertical-from-test-separator-to-knife'>
                            <Vertical />
                        </div>
                        <img src={arrow} alt='' className='large-pfd-arrow-from-test-separator-to-knife-up' />
                        <div className='large-pfd-horizontal-from-test-separator-to-knife'>
                            <Horizontal />
                        </div>
                        <img src={knife} alt='' className='large-pfd-knife-from-test-separator' />
                        <div className='large-pfd-horizontal-from-knife-to-prod-manifold'>
                            <Horizontal />
                        </div>
                        <div className='large-pfd-vertical-from-knife-to-prod-manifold'>
                            <Vertical />
                        </div>

                        <div className='large-pfd-horizontal-from-knife-from-vertical-to-prod-manifold'>
                            <Horizontal />
                        </div>
                        <img src={arrow} alt='' className='large-pfd-arrow-from-knife-to-prod-manifold-left' />
                        <img src={Tankvertical} alt='' className='large-pfd-tank-vertical' />
                        <div className='large-pfd-horizontal-to-olc'>
                            <Horizontal />
                        </div>
                        <img src={olc} alt='' className='large-pfd-olc' />
                        <div className='large-pfd-horizontal-from-olc'>
                            <Horizontal />
                        </div>
                        <img src={es} alt='' className='large-pfd-es-from-olc' />


                        <div className='large-pfd-horizontal-from-dlcv-to-valve'>
                            <Horizontal />
                        </div>
                        <div className='large-pfd-horizontal-from-dlcv-into-valve'>
                            <Horizontal />
                        </div>

                        <img src={valve} alt='' className='large-pfd-valve-from-dlcv-to-prod-manifold' />
                        <img src={arrow} alt='' className='large-pfd-arrow-from-dlcv-to-prod-manifold' />
                        <div className='large-pfd-vertical-from-dlcv-to-valve-up'>
                            <Vertical />
                        </div>
                        <div className='large-pfd-vertical-from-dlcv-into-valve-up'>
                            <Vertical />
                        </div>
                        <div className='large-pfd-horizontal-from-dlcv-vertical-to-valve-up'>
                            <Horizontal />
                        </div>
                        <img src={valve} alt='' className='large-pfd-valve-from-dlcv-to-sdv' />
                        <div className='large-pfd-horizontal-from-dlcv-valve-up-to-sdv'>
                            <Horizontal />
                        </div>
                        <img src={pcvstop} alt='' className='large-pfd-sdv-from-dlcv-to-gauging' />
                        <div className='large-pfd-horizontal-from-filter-to-dlcv'>
                            <Horizontal />
                        </div>
                        <img src={cv} alt='' className='large-pfd-dlcv-from-es-olc' />
                        <img src={meter} alt='' className='large-pfd-filter-to-dlcv' />
                        <div className='large-pfd-horizontal-from-test-separator-to-filter'>
                            <Horizontal />
                        </div>
                        <div className='large-pfd-vertical-from-test-separator-to-filter-down'>
                            <Vertical />
                        </div>
                        <img src={arrow} alt='' className='large-pfd-arrow-from-test-separator-to-filter-down' />
                        <div className='large-pfd-horizontal-from-test-separator-to-ilc'>
                            <Horizontal />
                        </div>
                        <img src={ilc} alt='' className='large-pfd-ilc' />
                        <img src={es} alt='' className='large-pfd-es-from-ilc' />
                        <img src={es} alt='' className='large-pfd-es-from-ilc-horizontal' />
                        <img src={es} alt='' className='large-pfd-es-from-ilc-horizontal-extend' />
                        <img src={es} alt='' className='large-pfd-es-from-ilc-to-ilcv' />
                        <img src={cv} alt='' className='large-pfd-ilcv-from-ilc' />
                        <div className='large-pfd-horizontal-from-test-separator-to-ilcv'>
                            <Horizontal />
                        </div>
                        <img src={meter} alt='' className='large-pfd-filter-to-ilcv' />
                        <div className='large-pfd-horizontal-from-test-separator-to-filter-to-ilcv'>
                            <Horizontal />
                        </div>
                        <div className='large-pfd-vertical-from-test-separator-to-filter-to-ilcv-down'>
                            <Vertical />
                        </div>
                        <div className='large-pfd-horizontal-from-ilcv'>
                            <Horizontal />
                        </div>
                        <img src={valve} alt='' className='large-pfd-valve-from-ilcv' />
                        <img src={arrow} alt='' className='large-pfd-arrow-from-ilcv-valve' />
                        <div className='large-pfd-vertical-from-ilcv-up-to-sdv'>
                            <Vertical />
                        </div>
                        <img src={valve} alt='' className='large-pfd-valve-from-ilcv-up-to-sdv' />
                        <div className='large-pfd-vertical-from-valve-up-to-sdv'>
                            <Vertical />
                        </div>
                        <div className='large-pfd-horizontal-from-valve-up-to-sdv'>
                            <Horizontal />
                        </div>
                        <div className='large-pfd-vertical-from-valve-horizontal-up-to-sdv'>
                            <Vertical />
                        </div>
                        <div className='large-pfd-vertical-from-valve-horizontal-up-to-flare'>
                            <Vertical />
                        </div>
                        <div className='large-pfd-horizontal-from-gauging-to-flare'>
                            <Horizontal />
                        </div>
                        <img src={flare} alt='' className='large-pfd-flare' />
                        <div className='large-pfd-vertical-from-gauging-to-pump'>
                            <Vertical />
                        </div>
                        <img src={pumptl} alt='' className='large-pfd-pump' />
                        <div className='large-pfd-horizontal-from-pump-to-pipe'>
                            <Horizontal />
                        </div>
                        <img src={arrow} alt='' className='large-pfd-arrow-from-knife-to-prod-manifold' />
                        <img src={arrow} alt='' className='large-pfd-arrow-from-knife-to-prod-manifold-down' />
                        <img src={arrow} alt='' className='large-pfd-arrow-1' />
                        <img src={arrow} alt='' className='large-pfd-arrow-2' />
                        <img src={arrow} alt='' className='large-pfd-arrow-3' />
                        <img src={arrow} alt='' className='large-pfd-arrow-4' />
                        <img src={arrow} alt='' className='large-pfd-arrow-5' />
                        <img src={arrow} alt='' className='large-pfd-arrow-6' />
                        <div className='large-pfd-label-wellhead'>{props.labelWellhead}</div>
                        <div className='large-pfd-label-tank-separator'>{props.labelSeparator}</div>
                        <div className='large-pfd-label-tank-separator-tag'>{props.labelSeparatorTag}</div>
                        <div className='large-pfd-label-vessel-gauging'>{props.labelGauging}</div>
                        <div className='large-pfd-label-vessel-gauging-tag'>{props.labelGaugingTag}</div>
                        <div className='large-pfd-label-pig-launcher'>{props.labelPig}</div>
                        <div className='large-pfd-label-flare'>{props.labelFlare}</div>
                        <div className='large-pfd-label-tag-1'>
                            <LabelTag tag="SDV" />
                        </div>
                        <div className='large-pfd-label-tag-2'>
                            <LabelTag tag="Prod Header Manifold" />
                        </div>
                        <div className='large-pfd-label-tag-3'>
                            <LabelTag tag="Test header Manifold" />
                        </div>
                        <div className='large-pfd-label-tag-4'>
                            <LabelTag tag="SDV" />
                        </div>
                        <div className='large-pfd-label-tag-5'>
                            <LabelTag tag="ILCV" />
                        </div>
                        <div className='large-pfd-label-tag-6'>
                            <LabelTag tag="OLCV" />
                        </div>
                        <div className='large-pfd-label-tag-7'>
                            <LabelTag tag="SDV" />
                        </div>
                        <div className='large-pfd-label-tag-8'>
                            <LabelTag tag="PP-1000" />
                        </div>
                        <div className='large-pfd-label-to'>{props.labelTo}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PfdLarge