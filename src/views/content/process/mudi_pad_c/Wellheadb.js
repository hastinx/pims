import React from 'react';
import Horizontal from '../../../../components/faceplate/pipe/Horizontal';
import Vertical from '../../../../components/faceplate/pipe/Vertical';
import Bowtopleft from '../../../../components/faceplate/pipe/Bowtopleft';
// import pcv from '../../../../assets/img/faceplate/pcv-run.png'
import pcvstop from '../../../../assets/img/faceplate/pcv-stop.png';
import valve from '../../../../assets/img/faceplate/valve.png';
import gauge from '../../../../assets/img/faceplate/gauge.png';
import sv from '../../../../assets/img/faceplate/sv.png';
import indicator from '../../../../assets/img/faceplate/indicator.png';
import wellhead from '../../../../assets/img/faceplate/wellhead-stop.png';
import Bowbottomleft from '../../../../components/faceplate/pipe/Bowbottomleft';

import './wellheadb.css';
import Blackbox from '../../../../components/faceplate/blackbox/Blackbox';

function Wellheadb() {
  return (
    <>
      <div className="card border-secondary" style={{ height: '300px' }}>
        <div className="card-header fw-semibold text-center text-white bg-secondary">
          WELLHEAD M#6
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
                <div className="padb-well-6-vertival-left-side">
                  <Vertical />
                </div>
                <div className="padb-well-6-vertival-left-bottom-bow">
                  <Bowbottomleft />
                </div>
              </div>
              <div className="d-flex align-items-end">
                <div className="padb-well-6-horizontal-bottom-side-one">
                  <Horizontal />
                </div>
                <img
                  className="padb-well-6-pcv-bottom-side"
                  src={pcvstop}
                  alt=""
                />
                <div className="padb-well-6-horizontal-bottom-side-two">
                  <Horizontal />
                </div>
                <img className="padb-well-6-wellhead" src={wellhead} alt="" />
              </div>
              <div className="padb-well-6-vertical-from-wellhead">
                <Vertical />
              </div>
              <div className="padb-well-6-wellhead-black-box">
                <Blackbox />
              </div>
              <div className="padb-well-6-vertical-from-wellhead-to-valve">
                <Vertical />
              </div>
              <img
                className="padb-well-6-valve-to-indicator"
                src={valve}
                alt=""
              />
              <div className="padb-well-6-vertical-from-wellhead-to-indicator">
                <Vertical />
              </div>
              <div className="padb-well-6-horizontal-from-wellhead-to-indicator">
                <Horizontal />
              </div>
              <img className="padb-well-6-wellhead-gauge" src={gauge} alt="" />
              <img
                className="padb-well-6-wellhead-indicator"
                src={indicator}
                alt=""
              />
              <div className="padb-well-6-horizontal-from-box">
                <Horizontal />
              </div>
              <img
                className="padb-well-6-pcv-from-box-to-safety"
                src={pcvstop}
                alt=""
              />
              <div className="padb-well-6-horizontal-to-safety">
                <Horizontal />
              </div>
              <img className="padb-well-6-sv-from-pcv" src={sv} alt="" />
              <div className="padb-well-6-vertical-from-safety">
                <Vertical />
              </div>
              <span className="padb-well-6-lbl-to-plant">TO MANIFOLD</span>
              {/* PSHH-3006 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-6-pshh-3006">
                <span className="padb-well-6-txt-pshh-3006 p-1 text-center bg-dark fw-bolder text-white">
                  PSHH-3006
                </span>
                <span className="padb-well-6-indicator-pshh-3006 p-1 text-center fw-bold bg-error">
                  ALARM
                </span>
              </div>
              {/* PT-3006 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-6-pt-3006">
                <span className="padb-well-6-txt-pt-3006 p-1 text-center bg-dark fw-bolder text-white">
                  PT-3006
                </span>
                <span className="padb-well-6-indicator-pt-3006 p-1 text-center fw-bold">
                  ##.###
                </span>
              </div>
              {/* SDV-1063 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-6-sdv-1063">
                <span className="padb-well-6-txt-sdv-1063 p-1 text-center bg-dark fw-bolder text-white">
                  SDV-1063
                </span>
                <span className="padb-well-6-indicator-sdv-1063 p-1 text-center fw-bold bg-error">
                  CLOSE
                </span>
              </div>
              {/* SDV-1062 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-6-sdv-1062">
                <span className="padb-well-6-txt-sdv-1062 p-1 text-center bg-dark fw-bolder text-white">
                  SDV-1062
                </span>
                <span className="padb-well-6-indicator-sdv-1062 p-1 text-center fw-bold bg-error">
                  CLOSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wellheadb;
