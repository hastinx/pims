import React from 'react';
import Horizontal from '../../../../../components/faceplate/pipe/Horizontal';
import Vertical from '../../../../../components/faceplate/pipe/Vertical';
import Bowtopleft from '../../../../../components/faceplate/pipe/Bowtopleft';
import pcv from '../../../../../assets/img/faceplate/pcv-run.png';
import valve from '../../../../../assets/img/faceplate/valve.png';
import gauge from '../../../../../assets/img/faceplate/gauge.png';
import sv from '../../../../../assets/img/faceplate/sv.png';
import indicator from '../../../../../assets/img/faceplate/indicator.png';
import wellhead from '../../../../../assets/img/faceplate/wellhead-stop.png';
import Bowbottomleft from '../../../../../components/faceplate/pipe/Bowbottomleft';

import './wellheadf.css';
import Blackbox from '../../../../../components/faceplate/blackbox/Blackbox';

function Wellheadf() {
  return (
    <>
      <div className="card border-secondary" style={{ height: '300px' }}>
        <div className="card-header fw-semibold text-center text-white bg-secondary">
          WELLHEAD M#22
        </div>
        <div className="card-body">
          <div className='wrap-well'>
            <div className="wrapper-bottom">
              <div className="d-flex">
                <div
                  style={{
                    height: '10px',
                    width: '10px',
                  }}
                >
                  <Bowtopleft />
                </div>
                <div
                  style={{
                    height: '10px',
                    width: '100%',
                  }}
                >
                  <Horizontal />
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="padb-well-22-vertival-left-side">
                  <Vertical />
                </div>
                <div className="padb-well-22-vertival-left-bottom-bow">
                  <Bowbottomleft />
                </div>
              </div>
              <div className="d-flex align-items-end">
                <div className="padb-well-22-horizontal-bottom-side-one">
                  <Horizontal />
                </div>
                <img className="padb-well-22-pcv-bottom-side" src={pcv} alt="" />
                <div className="padb-well-22-horizontal-bottom-side-two">
                  <Horizontal />
                </div>
                <img className="padb-well-22-wellhead" src={wellhead} alt="" />
              </div>
              <div className="padb-well-22-vertical-from-wellhead">
                <Vertical />
              </div>
              <div className="padb-well-22-wellhead-black-box">
                <Blackbox />
              </div>
              <div className="padb-well-22-vertical-from-wellhead-to-valve">
                <Vertical />
              </div>
              <img
                className="padb-well-22-valve-to-indicator"
                src={valve}
                alt=""
              />
              <div className="padb-well-22-vertical-from-wellhead-to-indicator">
                <Vertical />
              </div>
              <div className="padb-well-22-horizontal-from-wellhead-to-indicator">
                <Horizontal />
              </div>
              <img className="padb-well-22-wellhead-gauge" src={gauge} alt="" />
              <img
                className="padb-well-22-wellhead-indicator"
                src={indicator}
                alt=""
              />
              <div className="padb-well-22-horizontal-from-box">
                <Horizontal />
              </div>
              <img
                className="padb-well-22-pcv-from-box-to-safety"
                src={pcv}
                alt=""
              />
              <div className="padb-well-22-horizontal-to-safety">
                <Horizontal />
              </div>
              <img className="padb-well-22-sv-from-pcv" src={sv} alt="" />
              <div className="padb-well-22-vertical-from-safety">
                <Vertical />
              </div>
              <span className="padb-well-22-lbl-to-plant">TO MANIFOLD</span>
              {/* PSHH-3022 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-22-pshh-3022">
                <span className="padb-well-22-txt-pshh-3022 p-1 text-center bg-dark fw-bolder text-white">
                  PSHH-3022
                </span>
                <span className="padb-well-22-indicator-pshh-3022 p-1 text-center fw-bold bg-normal">
                  NORMAL
                </span>
              </div>
              {/* PT-3022 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-22-pt-3022">
                <span className="padb-well-22-txt-pt-3022 p-1 text-center bg-dark fw-bolder text-white">
                  PT-3022
                </span>
                <span className="padb-well-22-indicator-pt-3022 p-1 text-center fw-bold">
                  ##.###
                </span>
              </div>
              {/* SDV-1223 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-22-sdv-1223">
                <span className="padb-well-22-txt-sdv-1223 p-1 text-center bg-dark fw-bolder text-white">
                  SDV-1223
                </span>
                <span className="padb-well-22-indicator-sdv-1223 p-1 text-center fw-bold bg-normal">
                  OPEN
                </span>
              </div>
              {/* SDV-1222 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-22-sdv-1222">
                <span className="padb-well-22-txt-sdv-1222 p-1 text-center bg-dark fw-bolder text-white">
                  SDV-1222
                </span>
                <span className="padb-well-22-indicator-sdv-1222 p-1 text-center fw-bold bg-normal">
                  OPEN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wellheadf;
