import React from 'react';
import Horizontal from '../../../../components/faceplate/pipe/Horizontal';
import Vertical from '../../../../components/faceplate/pipe/Vertical';
import Bowtopleft from '../../../../components/faceplate/pipe/Bowtopleft';
import pcv from '../../../../assets/img/faceplate/pcv-run.png';
import valve from '../../../../assets/img/faceplate/valve.png';
import gauge from '../../../../assets/img/faceplate/gauge.png';
import sv from '../../../../assets/img/faceplate/sv.png';
import indicator from '../../../../assets/img/faceplate/indicator.png';
import wellhead from '../../../../assets/img/faceplate/wellhead-stop.png';
import Bowbottomleft from '../../../../components/faceplate/pipe/Bowbottomleft';

import './wellheade.css';
import Blackbox from '../../../../components/faceplate/blackbox/Blackbox';

function Wellheade() {
  return (
    <>
      <div className="card border-secondary" style={{ height: '300px' }}>
        <div className="card-header fw-semibold text-center text-white bg-secondary">
          WELLHEAD M#25
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
                <div className="padb-well-25-vertival-left-side">
                  <Vertical />
                </div>
                <div className="padb-well-25-vertival-left-bottom-bow">
                  <Bowbottomleft />
                </div>
              </div>
              <div className="d-flex align-items-end">
                <div className="padb-well-25-horizontal-bottom-side-one">
                  <Horizontal />
                </div>
                <img className="padb-well-25-pcv-bottom-side" src={pcv} alt="" />
                <div className="padb-well-25-horizontal-bottom-side-two">
                  <Horizontal />
                </div>
                <img className="padb-well-25-wellhead" src={wellhead} alt="" />
              </div>
              <div className="padb-well-25-vertical-from-wellhead">
                <Vertical />
              </div>
              <div className="padb-well-25-wellhead-black-box">
                <Blackbox />
              </div>
              <div className="padb-well-25-vertical-from-wellhead-to-valve">
                <Vertical />
              </div>
              <img
                className="padb-well-25-valve-to-indicator"
                src={valve}
                alt=""
              />
              <div className="padb-well-25-vertical-from-wellhead-to-indicator">
                <Vertical />
              </div>
              <div className="padb-well-25-horizontal-from-wellhead-to-indicator">
                <Horizontal />
              </div>
              <img className="padb-well-25-wellhead-gauge" src={gauge} alt="" />
              <img
                className="padb-well-25-wellhead-indicator"
                src={indicator}
                alt=""
              />
              <div className="padb-well-25-horizontal-from-box">
                <Horizontal />
              </div>
              <img
                className="padb-well-25-pcv-from-box-to-safety"
                src={pcv}
                alt=""
              />
              <div className="padb-well-25-horizontal-to-safety">
                <Horizontal />
              </div>
              <img className="padb-well-25-sv-from-pcv" src={sv} alt="" />
              <div className="padb-well-25-vertical-from-safety">
                <Vertical />
              </div>
              <span className="padb-well-25-lbl-to-plant">TO MANIFOLD</span>
              {/* PSHH-3025 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-25-pshh-3025">
                <span className="padb-well-25-txt-pshh-3025 p-1 text-center bg-dark fw-bolder text-white">
                  PSHH-3025
                </span>
                <span className="padb-well-25-indicator-pshh-3025 p-1 text-center fw-bold bg-normal">
                  NORMAL
                </span>
              </div>
              {/* PT-3025 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-25-pt-3025">
                <span className="padb-well-25-txt-pt-3025 p-1 text-center bg-dark fw-bolder text-white">
                  PT-3025
                </span>
                <span className="padb-well-25-indicator-pt-3025 p-1 text-center fw-bold">
                  ##.###
                </span>
              </div>
              {/* SDV-1253 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-25-sdv-1253">
                <span className="padb-well-25-txt-sdv-1253 p-1 text-center bg-dark fw-bolder text-white">
                  SDV-1253
                </span>
                <span className="padb-well-25-indicator-sdv-1253 p-1 text-center fw-bold bg-normal">
                  OPEN
                </span>
              </div>
              {/* SDV-1252 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-25-sdv-1252">
                <span className="padb-well-25-txt-sdv-1252 p-1 text-center bg-dark fw-bolder text-white">
                  SDV-1252
                </span>
                <span className="padb-well-25-indicator-sdv-1252 p-1 text-center fw-bold bg-normal">
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

export default Wellheade;
