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

import './wellheadd.css';
import Blackbox from '../../../../components/faceplate/blackbox/Blackbox';

function Wellheadd() {
  return (
    <>
      <div className="card border-secondary" style={{ height: '300px' }}>
        <div className="card-header fw-semibold text-center text-white bg-secondary">
          WELLHEAD M#8
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
                <div className="padb-well-8-vertival-left-side">
                  <Vertical />
                </div>
                <div className="padb-well-8-vertival-left-bottom-bow">
                  <Bowbottomleft />
                </div>
              </div>
              <div className="d-flex align-items-end">
                <div className="padb-well-8-horizontal-bottom-side-one">
                  <Horizontal />
                </div>
                <img className="padb-well-8-pcv-bottom-side" src={pcv} alt="" />
                <div className="padb-well-8-horizontal-bottom-side-two">
                  <Horizontal />
                </div>
                <img className="padb-well-8-wellhead" src={wellhead} alt="" />
              </div>
              <div className="padb-well-8-vertical-from-wellhead">
                <Vertical />
              </div>
              <div className="padb-well-8-wellhead-black-box">
                <Blackbox />
              </div>
              <div className="padb-well-8-vertical-from-wellhead-to-valve">
                <Vertical />
              </div>
              <img
                className="padb-well-8-valve-to-indicator"
                src={valve}
                alt=""
              />
              <div className="padb-well-8-vertical-from-wellhead-to-indicator">
                <Vertical />
              </div>
              <div className="padb-well-8-horizontal-from-wellhead-to-indicator">
                <Horizontal />
              </div>
              <img className="padb-well-8-wellhead-gauge" src={gauge} alt="" />
              <img
                className="padb-well-8-wellhead-indicator"
                src={indicator}
                alt=""
              />
              <div className="padb-well-8-horizontal-from-box">
                <Horizontal />
              </div>
              <img
                className="padb-well-8-pcv-from-box-to-safety"
                src={pcv}
                alt=""
              />
              <div className="padb-well-8-horizontal-to-safety">
                <Horizontal />
              </div>
              <img className="padb-well-8-sv-from-pcv" src={sv} alt="" />
              <div className="padb-well-8-vertical-from-safety">
                <Vertical />
              </div>
              <span className="padb-well-8-lbl-to-plant">TO MANIFOLD</span>
              {/* PSHH-3008 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-8-pshh-3008">
                <span className="padb-well-8-txt-pshh-3008 p-1 text-center bg-dark fw-bolder text-white">
                  PSHH-3008
                </span>
                <span className="padb-well-8-indicator-pshh-3008 p-1 text-center fw-bold bg-normal">
                  NORMAL
                </span>
              </div>
              {/* PT-3008 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-8-pt-3008">
                <span className="padb-well-8-txt-pt-3008 p-1 text-center bg-dark fw-bolder text-white">
                  PT-3008
                </span>
                <span className="padb-well-8-indicator-pt-3008 p-1 text-center fw-bold">
                  ##.###
                </span>
              </div>
              {/* SDV-1083 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-8-sdv-1083">
                <span className="padb-well-8-txt-sdv-1083 p-1 text-center bg-dark fw-bolder text-white">
                  SDV-1083
                </span>
                <span className="padb-well-8-indicator-sdv-1083 p-1 text-center fw-bold bg-normal">
                  OPEN
                </span>
              </div>
              {/* SDV-1082 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-8-sdv-1082">
                <span className="padb-well-8-txt-sdv-1082 p-1 text-center bg-dark fw-bolder text-white">
                  SDV-1082
                </span>
                <span className="padb-well-8-indicator-sdv-1082 p-1 text-center fw-bold bg-normal">
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

export default Wellheadd;
