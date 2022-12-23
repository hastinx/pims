import React, { useState, useEffect } from 'react'
import Horizontal from '../../../../../components/faceplate/pipe/Horizontal';
import Vertical from '../../../../../components/faceplate/pipe/Vertical';
import Bowtopleft from '../../../../../components/faceplate/pipe/Bowtopleft';
import pcv from '../../../../../assets/img/faceplate/pcv-run.png'
import pcvstop from '../../../../../assets/img/faceplate/pcv-stop.png';
import valve from '../../../../../assets/img/faceplate/valve.png';
import gauge from '../../../../../assets/img/faceplate/gauge.png';
import sv from '../../../../../assets/img/faceplate/sv.png';
import indicator from '../../../../../assets/img/faceplate/indicator.png';
import wellhead from '../../../../../assets/img/faceplate/wellhead-stop.png';
import Bowbottomleft from '../../../../../components/faceplate/pipe/Bowbottomleft';
import './wellheadb.css';
import Blackbox from '../../../../../components/faceplate/blackbox/Blackbox';
import axios from 'axios'
import Swal from 'sweetalert2'
function Wellheadb() {
  const [pshh3010, setPshh3010] = useState('');
  const [pt3010, setPt3010] = useState('');
  const [sdv1103, setSdv1103] = useState('');
  const [sdv1102, setSdv1102] = useState('');
  // const [msg, setMsg] = useState('');

  // const navigate = useNavigate();
  const wellhead2 = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + 'pad_a/wellhead/m10');
      const value = response.data.values[0];
      console.log(response.data)
      setPshh3010(value.pshH_3010)
      setPt3010(value.pT_3010)
      setSdv1103(value.sdV_1103)
      setSdv1102(value.sdV_1102)

    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message)
        Swal.fire({
          title: 'Oops!',
          text: 'Wellhead M10 ' + error.response.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        })

      }
    }
  }
  useEffect(() => {
    wellhead2();
  }, []);
  return (
    <>
      <div className="card border-secondary" style={{ height: '300px' }}>
        <div className="card-header fw-semibold text-center text-white bg-secondary">
          WELLHEAD M#10
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
                <div className="padb-well-10-vertival-left-side">
                  <Vertical />
                </div>
                <div className="padb-well-10-vertival-left-bottom-bow">
                  <Bowbottomleft />
                </div>
              </div>
              <div className="d-flex align-items-end">
                <div className="padb-well-10-horizontal-bottom-side-one">
                  <Horizontal />
                </div>
                <img
                  className="padb-well-10-pcv-bottom-side"
                  src={sdv1103 === 1 ? pcv : pcvstop}
                  alt=""
                />
                <div className="padb-well-10-horizontal-bottom-side-two">
                  <Horizontal />
                </div>
                <img className="padb-well-10-wellhead" src={wellhead} alt="" />
              </div>
              <div className="padb-well-10-vertical-from-wellhead">
                <Vertical />
              </div>
              <div className="padb-well-10-wellhead-black-box">
                <Blackbox />
              </div>
              <div className="padb-well-10-vertical-from-wellhead-to-valve">
                <Vertical />
              </div>
              <img
                className="padb-well-10-valve-to-indicator"
                src={valve}
                alt=""
              />
              <div className="padb-well-10-vertical-from-wellhead-to-indicator">
                <Vertical />
              </div>
              <div className="padb-well-10-horizontal-from-wellhead-to-indicator">
                <Horizontal />
              </div>
              <img className="padb-well-10-wellhead-gauge" src={gauge} alt="" />
              <img
                className="padb-well-10-wellhead-indicator"
                src={indicator}
                alt=""
              />
              <div className="padb-well-10-horizontal-from-box">
                <Horizontal />
              </div>
              <img
                className="padb-well-10-pcv-from-box-to-safety"
                src={sdv1102 === 1 ? pcv : pcvstop}
                alt=""
              />
              <div className="padb-well-10-horizontal-to-safety">
                <Horizontal />
              </div>
              <img className="padb-well-10-sv-from-pcv" src={sv} alt="" />
              <div className="padb-well-10-vertical-from-safety">
                <Vertical />
              </div>
              <span className="padb-well-10-lbl-to-plant">TO MANIFOLD</span>
              {/* PSHH-3010 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-10-pshh-3010">
                <span className="padb-well-10-txt-pshh-3010 p-1 text-center bg-dark fw-bolder text-white">
                  PSHH-3010
                </span>
                <span className={"padb-well-10-indicator-pshh-3010 p-1 text-center fw-bold " + (pshh3010 === 'NORMAL' ? 'bg-normal' : 'bg-error')}>
                  {pshh3010 ? pshh3010 : 'ERROR'}
                </span>
              </div>
              {/* PT-3010 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-10-pt-3010">
                <span className="padb-well-10-txt-pt-3010 p-1 text-center bg-dark fw-bolder text-white">
                  PT-3010
                </span>
                <span className="padb-well-10-indicator-pt-3010 p-1 text-center fw-bold">
                  {pt3010 ? pt3010 : '####'}
                </span>
              </div>
              {/* SDV-1103 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-10-sdv-1103">
                <span className="padb-well-10-txt-sdv-1103 p-1 text-center bg-dark fw-bolder text-white">
                  SDV-1103
                </span>
                <span className={"padb-well-10-indicator-sdv-1103 p-1 text-center fw-bold " + (sdv1103 === 1 ? 'bg-normal' : 'bg-error')}>
                  {sdv1103 === 1 ? 'OPEN' : 'CLOSE'}
                </span>
              </div>
              {/* SDV-1102 */}
              <div className="d-flex flex-column bg-light p-1 border border-primary padb-well-10-sdv-1102">
                <span className="padb-well-10-txt-sdv-1102 p-1 text-center bg-dark fw-bolder text-white">
                  SDV-1102
                </span>
                <span className={"padb-well-10-indicator-sdv-1102 p-1 text-center fw-bold " + (sdv1102 === 1 ? 'bg-normal' : 'bg-error')}>
                  {sdv1102 === 1 ? 'OPEN' : 'CLOSE'}
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
