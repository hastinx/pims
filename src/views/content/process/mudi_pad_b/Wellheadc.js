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

import './wellheadc.css';
import Blackbox from '../../../../components/faceplate/blackbox/Blackbox';

function Wellheadc() {
  return (
    <>
      <div className="card border-secondary" style={{ height: '300px' }}>
        <div className="card-header fw-semibold text-center text-white bg-secondary">
          WELLHEAD M#23
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
                <div className="padb-well-23-vertival-left-side">
                  <Vertical />
                </div>
                <div className="padb-well-23-vertival-left-bottom-bow">
                  <Bowbottomleft />
                </div>
              </div>
              <div className="d-flex align-items-end">
                <div className="padb-well-23-horizontal-bottom-side-one">
                  <Horizontal />
                </div>
                <img className="padb-well-23-pcv-bottom-side" src={pcv} alt="" />
                <div className="padb-well-23-horizontal-bottom-side-two">
                  <Horizontal />
                </div>
                <img className="padb-well-23-wellhead" src={wellhead} alt="" />
              </div>
              <div className="padb-well-23-vertical-from-wellhead">
                <Vertical />
              </div>
              <div className="padb-well-23-wellhead-black-box">
                <Blackbox />
              </div>
              <div className="padb-well-23-vertical-from-wellhead-to-valve">
                <Vertical />
              </div>
              <img
                className="padb-well-23-valve-to-indicator"
                src={valve}
                alt=""
              />
              <div className="padb-well-23-vertical-from-wellhead-to-indicator">
                <Vertical />
              </div>
              <div className="padb-well-23-horizontal-from-wellhead-to-indicator">
                <Horizontal />
              </div>
              <img className="padb-well-23-wellhead-gauge" src={gauge} alt="" />
              <img
                className="padb-well-23-wellhead-indicator"
                src={indicator}
                alt=""
              />
              <div className="padb-well-23-horizontal-from-box">
                <Horizontal />
              </div>
              <img
                className="padb-well-23-pcv-from-box-to-safety"
                src={pcv}
                alt=""
              />
              <div className="padb-well-23-horizontal-to-safety">
                <Horizontal />
              </div>
              <img className="padb-well-23-sv-from-pcv" src={sv} alt="" />
              <div className="padb-well-23-vertical-from-safety">
                <Vertical />
              </div>
              <span className="padb-well-23-lbl-to-plant">TO MANIFOLD</span>
              {/* PSHH-3023 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-23-pshh-3023">
                <span className="padb-well-23-txt-pshh-3023 p-1 text-center bg-dark fw-bolder text-white">
                  PSHH-3023
                </span>
                <span className="padb-well-23-indicator-pshh-3023 p-1 text-center fw-bold bg-normal">
                  NORMAL
                </span>
              </div>
              {/* PT-3023 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-23-pt-3023">
                <span className="padb-well-23-txt-pt-3023 p-1 text-center bg-dark fw-bolder text-white">
                  PT-3023
                </span>
                <span className="padb-well-23-indicator-pt-3023 p-1 text-center fw-bold">
                  ##.###
                </span>
              </div>
              {/* SDV-1233 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-23-sdv-1233">
                <span className="padb-well-23-txt-sdv-1233 p-1 text-center bg-dark fw-bolder text-white">
                  SDV-1233
                </span>
                <span className="padb-well-23-indicator-sdv-1233 p-1 text-center fw-bold bg-normal">
                  OPEN
                </span>
              </div>
              {/* SDV-1232 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-23-sdv-1232">
                <span className="padb-well-23-txt-sdv-1232 p-1 text-center bg-dark fw-bolder text-white">
                  SDV-1232
                </span>
                <span className="padb-well-23-indicator-sdv-1232 p-1 text-center fw-bold bg-normal">
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

export default Wellheadc;
