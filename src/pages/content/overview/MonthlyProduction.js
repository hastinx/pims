import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { useGetApi } from "../../../server/Api";

const styles = {
  table: {
    width: "max-content",
  },
  head_width: {
    width: "200px",
    backgroundColor: "#002c6c",
    border: "1px solid #000",
    borderColapse: "colapse",
    textAlign: "center",
    color: "#f7ff00",
  },
  data_width: {
    width: "100px",
    border: "1px solid #000",
    borderColapse: "colapse",
    textAlign: "right",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  head: {
    backgroundColor: "#002c6c",
    border: "1px solid #000",
    borderColapse: "colapse",
    textAlign: "center",
    color: "#f7ff00",
  },
  data: {
    textAlign: "right",
    border: "1px solid #000",
    borderColapse: "colapse",
    paddingRight: "5px",
    paddingLeft: "5px",
  },
  desc_yellow: {
    fontWeight: "600",
    backgroundColor: "#f7ff00",
    border: "1px solid #000",
    borderColapse: "colapse",
    textAlign: "center",
    cursor: "pointer",
  },
  desc_green: {
    fontWeight: "600",
    border: "1px solid #000",
    borderColapse: "colapse",
    textAlign: "center",
    backgroundColor: "#219700",
    cursor: "pointer",
  },
};

const MonthlyProduction = () => {
  const [dataMontyly, setData] = useState([]);
  const [id, setId] = useState(0);
  const [descr, setDescr] = useState("");
  const [yeartodate, setYeartodate] = useState(0);
  const [JAN, setJan] = useState(0);
  const [FEB, setFeb] = useState(0);
  const [MAR, setMar] = useState(0);
  const [APR, setApr] = useState(0);
  const [MEI, setMei] = useState(0);
  const [JUN, setJun] = useState(0);
  const [JUL, setJul] = useState(0);
  const [AUG, setAug] = useState(0);
  const [SEP, setSep] = useState(0);
  const [OCT, setOOct] = useState(0);
  const [NOV, setNov] = useState(0);
  const [DEC, setDec] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (e, dataRow) => {
    if (e === 2) {
      setId(dataRow.id);
      setDescr(dataRow.descr);
      setYeartodate(dataRow.yeartodate);
      setJan(dataRow.JAN);
      setFeb(dataRow.FEB);
      setMar(dataRow.MAR);
      setApr(dataRow.APR);
      setMei(dataRow.MEI);
      setJun(dataRow.JUN);
      setJul(dataRow.JUL);
      setAug(dataRow.AUG);
      setSep(dataRow.SEP);
      setOOct(dataRow.OCT);
      setNov(dataRow.NOV);
      setDec(dataRow.DEC);
      handleShow();
    }
  };

  const GetData = async () => {
    const data = await useGetApi("monthly_production");
    console.log("monthly :", data);
    if (data.error === false) {
      setData(data.data.values);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Block Summary " + data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        process.env.REACT_APP_API_URL + "monthly_production/update",
        {
          id: id,
          descr: descr,
          yeartodate: yeartodate,
          JAN: JAN,
          FEB: FEB,
          MAR: MAR,
          APR: APR,
          MEI: MEI,
          JUN: JUN,
          JUL: JUL,
          AUG: AUG,
          SEP: SEP,
          OCT: OCT,
          NOV: NOV,
          DEC: DEC,
        }
      );

      GetData();
      handleClose();
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Block Summary " + error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <div className="card border-secondary">
        <div className="card-header fw-semibold text-center text-white bg-secondary">
          MONTLY PRODUCTION
        </div>
        <div className="card-body">
          <div style={{ overflowX: "scroll", marginBottom: "7px" }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th className="" style={styles.head_width}>
                    DESCRIPTION
                  </th>
                  <th style={styles.head}>JAN</th>
                  <th style={styles.head}>FEB</th>
                  <th style={styles.head}>MAR</th>
                  <th style={styles.head}>APRIL</th>
                  <th style={styles.head}>MAY</th>
                  <th style={styles.head}>JUNI</th>
                  <th style={styles.head}>JULY</th>
                  <th style={styles.head}>AUG</th>
                  <th style={styles.head}>SEP</th>
                  <th style={styles.head}>OCT</th>
                  <th style={styles.head}>NOP</th>
                  <th style={styles.head}>DES</th>
                </tr>
              </thead>
              <tbody>
                {dataMontyly.map((i) => (
                  <tr
                    onClick={(e) => handleClick(e.detail, i)}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Double Click for change value"
                  >
                    <td
                      style={i.id > 2 ? styles.desc_yellow : styles.desc_green}
                    >
                      {i.descr}
                    </td>
                    <td style={styles.data_width}>
                      {i.JAN ? i.JAN.toFixed(2) : ""}
                    </td>
                    <td style={styles.data_width}>
                      {i.FEB ? i.FEB.toFixed(2) : ""}
                    </td>
                    <td style={styles.data_width}>
                      {i.MAR ? i.MAR.toFixed(2) : ""}
                    </td>
                    <td style={styles.data_width}>
                      {i.APR ? i.APR.toFixed(2) : ""}
                    </td>
                    <td style={styles.data_width}>
                      {i.MEI ? i.MEI.toFixed(2) : ""}
                    </td>
                    <td style={styles.data_width}>
                      {i.JUN ? i.JUN.toFixed(2) : ""}
                    </td>
                    <td style={styles.data_width}>
                      {i.JUL ? i.JUL.toFixed(2) : ""}
                    </td>
                    <td style={styles.data_width}>
                      {i.AUG ? i.AUG.toFixed(2) : ""}
                    </td>
                    <td style={styles.data_width}>
                      {i.SEP ? i.SEP.toFixed(2) : ""}
                    </td>
                    <td style={styles.data_width}>
                      {i.OCT ? i.OCT.toFixed(2) : ""}
                    </td>
                    <td style={styles.data_width}>
                      {i.NOV ? i.NOV.toFixed(2) : ""}
                    </td>
                    <td style={styles.data_width}>
                      {i.DEC ? i.DEC.toFixed(2) : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{descr}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="p-2">
            <div className="row align-items-center mb-1 g-2">
              <label className="form-label col-2">JAN</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={JAN}
                placeholder="MMSCFD"
                onChange={(e) => setJan(e.target.value)}
              />
              <label className="form-label col-2 ps-3">JUL</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={JUL}
                placeholder="MMSCFD"
                onChange={(e) => setJul(e.target.value)}
              />
            </div>
            <div className="row align-items-center mb-1 g-2">
              <label className="form-label col-2">FEB</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={FEB}
                placeholder="MMSCFD"
                onChange={(e) => setFeb(e.target.value)}
              />
              <label className="form-label col-2 ps-3">AUG</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={AUG}
                placeholder="MMSCFD"
                onChange={(e) => setAug(e.target.value)}
              />
            </div>
            <div className="row align-items-center mb-1 g-2">
              <label className="form-label col-2">MAR</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={MAR}
                placeholder="MMSCFD"
                onChange={(e) => setMar(e.target.value)}
              />
              <label className="form-label col-2 ps-3">SEP</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={SEP}
                placeholder="MMSCFD"
                onChange={(e) => setSep(e.target.value)}
              />
            </div>
            <div className="row align-items-center g-2">
              <label className="form-label col-2">APR</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={APR}
                placeholder="MMSCFD"
                onChange={(e) => setApr(e.target.value)}
              />
              <label className="form-label col-2 ps-3">OCT</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={OCT}
                placeholder="MMSCFD"
                onChange={(e) => setOOct(e.target.value)}
              />
            </div>
            <div className="row align-items-center g-2">
              <label className="form-label col-2">MEI</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={MEI}
                placeholder="MMSCFD"
                onChange={(e) => setMei(e.target.value)}
              />
              <label className="form-label col-2 ps-3">NOV</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={NOV}
                placeholder="MMSCFD"
                onChange={(e) => setNov(e.target.value)}
              />
            </div>
            <div className="row align-items-center g-2">
              <label className="form-label col-2">JUN</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={JUN}
                placeholder="MMSCFD"
                onChange={(e) => setJun(e.target.value)}
              />
              <label className="form-label col-2 ps-3">DEC</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={DEC}
                placeholder="MMSCFD"
                onChange={(e) => setDec(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUpdate()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MonthlyProduction;
