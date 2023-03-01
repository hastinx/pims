import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Tooltip } from "react-bootstrap";
import Swal from "sweetalert2";
import { useGetApi } from "../../../server/Api";

const styles = {
  table: {
    width: "100%",
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
    paddingRight: "10px",
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

const YearlyProduction = () => {
  const [dataYearly, setData] = useState([]);
  const [lastYear, setLastyear] = useState("");
  const [yearToDate, setYear] = useState("");
  const [id, setId] = useState(0);
  const [descr, setDescr] = useState("");
  const [lastYearValue, setLastyearvalue] = useState("");
  const [yearToDateValue, setYeartodatevalue] = useState("");
  const [e_lastYear, setLastyear_e] = useState("");
  const [e_yearToDate, setYeartodate_e] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const GetData = async () => {
    const data = await useGetApi("yearly_production");
    if (data.error === false) {
      setData(data.data.values);
      setLastyear(data.data.values[0].lastyear);
      setYear(data.data.values[0].yeartodate);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Yearly Production " + data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleClick = (e, dataRow) => {
    if (e === 2) {
      setId(dataRow.id);
      setDescr(dataRow.descr);
      setLastyearvalue(dataRow.lastyearvalue);
      setYeartodatevalue(dataRow.yeartodatevalue);
      setLastyear_e(dataRow.lastyear);
      setYeartodate_e(dataRow.yeartodate);
      handleShow();
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        process.env.REACT_APP_API_URL + "yearly_production/update",
        {
          id: id,
          descr: descr,
          lastyear: e_lastYear,
          yeartodate: e_yearToDate,
          lastyearvalue: lastYearValue,
          yeartodatevalue: yearToDateValue,
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
          YEARLY PRODUCTION
        </div>
        <div className="card-body">
          <table style={styles.table}>
            <tr>
              <th style={styles.head}>DESCRIPTION</th>
              <th style={styles.head}>
                Last Year <br /> {lastYear}
              </th>
              <th style={styles.head}>
                YTD <br /> {yearToDate}
              </th>
            </tr>

            {dataYearly.map((i) => (
              <tr
                onClick={(e) => handleClick(e.detail, i)}
                data-toggle="tooltip"
                data-placement="top"
                title="Double Click for change value"
              >
                <td style={i.id > 2 ? styles.desc_yellow : styles.desc_green}>
                  {i.descr}
                </td>
                <td style={styles.data}>
                  {i.lastyearvalue ? i.lastyearvalue.toFixed(2) : ""}
                </td>
                <td style={styles.data}>
                  {i.yeartodatevalue ? i.yeartodatevalue.toFixed(2) : ""}
                </td>
              </tr>
            ))}
          </table>
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
              <label className="form-label col-4">Last Year Result</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={lastYearValue}
                placeholder="MMSCFD"
                onChange={(e) => setLastyearvalue(e.target.value)}
              />
            </div>
            <div className="row align-items-center mb-1 g-2">
              <label className="form-label col-4">YTD Result</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={yearToDateValue}
                placeholder="MMSCFD"
                onChange={(e) => setYeartodatevalue(e.target.value)}
              />
            </div>
            <div className="row align-items-center mb-1 g-2">
              <label className="form-label col-4">Last Year</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={e_lastYear}
                placeholder="MMSCFD"
                onChange={(e) => setLastyear_e(e.target.value)}
              />
            </div>
            <div className="row align-items-center g-2">
              <label className="form-label col-4">YTD</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                value={e_yearToDate}
                placeholder="MMSCFD"
                onChange={(e) => setYeartodate_e(e.target.value)}
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

export default YearlyProduction;
