import React, { useState, useEffect } from 'react';
import Horizontal from '../../../../../components/faceplate/pipe/Horizontal';
import Vertical from '../../../../../components/faceplate/pipe/Vertical';
import Bowtopleft from '../../../../../components/faceplate/pipe/Bowtopleft';
import pcv from '../../../../../assets/img/faceplate/pcv-run.png';
import pcvstop from '../../../../../assets/img/faceplate/pcv-stop.png';
import valve from '../../../../../assets/img/faceplate/valve.png';
import gauge from '../../../../../assets/img/faceplate/gauge.png';
import sv from '../../../../../assets/img/faceplate/sv.png';
import indicator from '../../../../../assets/img/faceplate/indicator.png';
import wellhead from '../../../../../assets/img/faceplate/wellhead-stop.png';
import Bowbottomleft from '../../../../../components/faceplate/pipe/Bowbottomleft';
import './wellheadc.css';
import Blackbox from '../../../../../components/faceplate/blackbox/Blackbox';
import axios from 'axios'
import Swal from 'sweetalert2'

function Wellheadc() {

  const [pshh3011, setPshh3011] = useState('');
  const [pt3011, setPt3011] = useState('');
  const [sdv1113, setSdv1113] = useState('');
  const [sdv1112, setSdv1112] = useState('');
  // const [msg, setMsg] = useState('');

  // const navigate = useNavigate();
  const wellhead3 = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + 'pad_a/wellhead/m11');
      const value = response.data.values[0];
      console.log(response.data)
      setPshh3011(value.pshH_3011)
      setPt3011(value.pT_3011)
      setSdv1113(value.sdV_1113)
      setSdv1112(value.sdV_1112)

    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message)
        Swal.fire({
          title: 'Oops!',
          text: 'Wellhead M11 ' + error.response.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        })

      }
    }
  }
  useEffect(() => {
    wellhead3();
  }, []);

  return (
    <>
      <div className="card border-secondary" style={{ height: '300px' }}>
        <div className="card-header fw-semibold text-center text-white bg-secondary">
          WELLHEAD M#11
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
                <div className="padb-well-11-vertival-left-side">
                  <Vertical />
                </div>
                <div className="padb-well-11-vertival-left-bottom-bow">
                  <Bowbottomleft />
                </div>
              </div>
              <div className="d-flex align-items-end">
                <div className="padb-well-11-horizontal-bottom-side-one">
                  <Horizontal />
                </div>
                <img className="padb-well-11-pcv-bottom-side" src={sdv1113 === 1 ? pcv : pcvstop} alt="" />
                <div className="padb-well-11-horizontal-bottom-side-two">
                  <Horizontal />
                </div>
                <img className="padb-well-11-wellhead" src={wellhead} alt="" />
              </div>
              <div className="padb-well-11-vertical-from-wellhead">
                <Vertical />
              </div>
              <div className="padb-well-11-wellhead-black-box">
                <Blackbox />
              </div>
              <div className="padb-well-11-vertical-from-wellhead-to-valve">
                <Vertical />
              </div>
              <img
                className="padb-well-11-valve-to-indicator"
                src={valve}
                alt=""
              />
              <div className="padb-well-11-vertical-from-wellhead-to-indicator">
                <Vertical />
              </div>
              <div className="padb-well-11-horizontal-from-wellhead-to-indicator">
                <Horizontal />
              </div>
              <img className="padb-well-11-wellhead-gauge" src={gauge} alt="" />
              <img
                className="padb-well-11-wellhead-indicator"
                src={indicator}
                alt=""
              />
              <div className="padb-well-11-horizontal-from-box">
                <Horizontal />
              </div>
              <img
                className="padb-well-11-pcv-from-box-to-safety"
                src={sdv1112 === 1 ? pcv : pcvstop}
                alt=""
              />
              <div className="padb-well-11-horizontal-to-safety">
                <Horizontal />
              </div>
              <img className="padb-well-11-sv-from-pcv" src={sv} alt="" />
              <div className="padb-well-11-vertical-from-safety">
                <Vertical />
              </div>
              <span className="padb-well-11-lbl-to-plant">TO MANIFOLD</span>
              {/* PSHH-3011 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-11-pshh-3011">
                <span className="padb-well-11-txt-pshh-3011 p-1 text-center bg-dark fw-bolder text-white">
                  PSHH-3011
                </span>
                <span className={"padb-well-11-indicator-pshh-3011 p-1 text-center fw-bold " + (pshh3011 === 'NORMAL' ? 'bg-normal' : 'bg-error')}>
                  {pshh3011 ? pshh3011 : 'ERROR'}
                </span>
              </div>
              {/* PT-3011 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-11-pt-3011">
                <span className="padb-well-11-txt-pt-3011 p-1 text-center bg-dark fw-bolder text-white">
                  PT-3011
                </span>
                <span className="padb-well-11-indicator-pt-3011 p-1 text-center fw-bold">
                  {pt3011 ? pt3011 : '####'}
                </span>
              </div>
              {/* SDV-1113 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-11-sdv-1113">
                <span className="padb-well-11-txt-sdv-1113 p-1 text-center bg-dark fw-bolder text-white">
                  SDV-1113
                </span>
                <span className={"padb-well-11-indicator-sdv-1113 p-1 text-center fw-bold " + (sdv1113 === 1 ? 'bg-normal' : 'bg-error')}>
                  {sdv1113 === 1 ? 'OPEN' : 'CLOSE'}
                </span>
              </div>
              {/* SDV-1112 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-11-sdv-1112">
                <span className="padb-well-11-txt-sdv-1112 p-1 text-center bg-dark fw-bolder text-white">
                  SDV-1112
                </span>
                <span className={"padb-well-11-indicator-sdv-1112 p-1 text-center fw-bold " + (sdv1112 === 1 ? 'bg-normal' : 'bg-error')}>
                  {sdv1112 === 1 ? 'OPEN' : 'CLOSE'}
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
