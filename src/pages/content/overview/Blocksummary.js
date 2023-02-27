import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { useGetApi } from "../../../server/Api";

function Blocksummary() {
  const [show, setShow] = useState(false);
  const [bopd, setBopd] = useState("");
  const [mmscfd, setMmscfd] = useState("");
  const [ids, setId] = useState(2);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = async () => {
    try {
      await axios.put(
        process.env.REACT_APP_API_URL + "current_production/update",
        {
          id: ids,
          table_1: bopd,
          table_2: mmscfd,
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

  const GetData = async () => {
    const data = await useGetApi("current_production");
    if (data.error === false) {
      setBopd(data.data.values.table_1);
      setMmscfd(data.data.values.table_2);
      setId(data.data.values.id);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Block Summary " + data.message,
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
        <div className="card-header fw-semibold text-center text-white bg-secondary d-flex justify-content-between">
          BLOCK SUMMARY{" "}
          <button className="btn btn-sm btn-primary left" onClick={handleShow}>
            <i className="fa fa-pencil fs-6" />
          </button>
        </div>
        <div className="card-body">
          <div className="row">
            <span className="col-md-5">First Production</span>
            <span className="col-md-1">:</span>
            <span className="col-md-6">6,500 bopd (Mudi-Desember 1997)</span>
          </div>
          <div className="row">
            <span className="col-md-5">Peak Production</span>
            <span className="col-md-1">:</span>
            <span className="col-md-6 text-start">
              46,389 bopd (Mudi + Sukowati 100%) Oktober 2011
            </span>
          </div>
          <div className="row">
            <span className="col-md-5">Curr.Production</span>
            <span className="col-md-1">:</span>
            <span className="col-md-6 text-start">
              YTD january 2022 <br /> {bopd} BOPD
              <br /> {mmscfd} MMSCFD
            </span>
          </div>
          <div className="row">
            <span className="col-md-5">Existing Gas buyer</span>
            <span className="col-md-1">:</span>
            <span className="col-md-6 text-start">PT.Gresik Migas</span>
          </div>
          <div className="row">
            <span className="col-md-5">Production Field</span>
            <span className="col-md-1">:</span>
            <span className="col-md-6 text-start">
              2 Fields Mudi & Lengowangi
            </span>
          </div>
          <div className="row">
            <span className="col-md-5">Major Facilities</span>
            <span className="col-md-1">:</span>
            <span className="col-md-6 text-start">
              Mudi PAD 1,2,3,Lengowangi
            </span>
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
          <Modal.Title>Edit Block Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="p-2">
            <div className="form-group row align-items-center mb-2 g-2">
              <label className="form-label col-2">BOPD</label>
              <input
                className="form-control col"
                type="text"
                name="bopd"
                onChange={(e) => setBopd(e.target.value)}
                placeholder="BOPD"
              />
            </div>
            <div className="row align-items-center g-2">
              <label className="form-label col-2">MMSCFD</label>
              <input
                className="form-control col"
                type="text"
                name="mmscfd"
                onChange={(e) => setMmscfd(e.target.value)}
                placeholder="MMSCFD"
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
}

export default Blocksummary;
