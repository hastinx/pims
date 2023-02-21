import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import MasterLayout from "../../../components/Layout";
import MasterWellSummary from "../../../components/WellSummary";
import { useGetApi } from "../../../server/Api";

const WellSummary = () => {
  const [status_pad_a_well_1, setPad_a_well_1] = useState(0);
  const [status_pad_a_well_10, setPad_a_well_10] = useState(0);
  const [status_pad_a_well_11, setPad_a_well_11] = useState(0);
  const [status_pad_a_well_19, setPad_a_well_19] = useState(0);
  const [status_pad_a_well_21, setPad_a_well_21] = useState(0);
  const [status_pad_a_well_22, setPad_a_well_22] = useState(0);
  const [status_pad_a_well_27, setPad_a_well_27] = useState(0);

  const GetDataPadA = async () => {
    const data = await useGetApi("pad_a/well_summary");
    if (data.error === false) {
      setPad_a_well_1(data.data.values.WELLHEAD_1);
      setPad_a_well_10(data.data.values.WELLHEAD_10);
      setPad_a_well_11(data.data.values.WELLHEAD_11);
      setPad_a_well_19(data.data.values.WELLHEAD_19);
      setPad_a_well_21(data.data.values.WELLHEAD_21);
      setPad_a_well_22(data.data.values.WELLHEAD_22);
      setPad_a_well_27(data.data.values.WELLHEAD_27);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "WellSummary Pad A " + data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      GetDataPadA();
    }, 10000);

    return () => clearInterval(interval);
  });

  return (
    <MasterLayout>
      <div className="row mt-4">
        <div className="col-xl-12 col-md-12 ">
          <div className="card">
            <div className="card-header text-center bg-secondary text-white">
              MUDI PAD A
            </div>
            <div className="card-body d-flex flex-wrap">
              <MasterWellSummary
                status={status_pad_a_well_1}
                tag="WELLHEAD M#1"
              />
              <MasterWellSummary
                status={status_pad_a_well_10}
                tag="WELLHEAD M#10"
              />
              <MasterWellSummary
                status={status_pad_a_well_11}
                tag="WELLHEAD M#11"
              />
              <MasterWellSummary
                status={status_pad_a_well_19}
                tag="WELLHEAD M#19"
              />
              <MasterWellSummary
                status={status_pad_a_well_21}
                tag="WELLHEAD M#21"
              />
              <MasterWellSummary
                status={status_pad_a_well_22}
                tag="WELLHEAD M#22"
              />
              <MasterWellSummary
                status={status_pad_a_well_27}
                tag="WELLHEAD M#27"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-xl-12 col-md-12 ">
          <div className="card">
            <div className="card-header text-center bg-secondary text-white">
              MUDI PAD B
            </div>
            <div className="card-body d-flex flex-wrap">
              <MasterWellSummary status="STOP" tag="WELLHEAD M#2A" />
              <MasterWellSummary status="STOP" tag="WELLHEAD M#4" />
              <MasterWellSummary status="STOP" tag="WELLHEAD M#5" />
              <MasterWellSummary status="STOP" tag="WELLHEAD M#9" />
              <MasterWellSummary status="STOP" tag="WELLHEAD M#15" />
              <MasterWellSummary status="STOP" tag="WELLHEAD M#16" />
              <MasterWellSummary status="STOP" tag="WELLHEAD M#17" />
              <MasterWellSummary status="ON" tag="WELLHEAD M#18" />
              <MasterWellSummary status="ON" tag="WELLHEAD M#23" />
              <MasterWellSummary status="STOP" tag="WELLHEAD M#24" />
              <MasterWellSummary status="ON" tag="WELLHEAD M#25" />
              <MasterWellSummary status="STOP" tag="WELLHEAD M#26" />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-xl-6 col-md-6 ">
          <div className="card">
            <div className="card-header text-center bg-secondary text-white">
              MUDI PAD C
            </div>
            <div className="card-body d-flex flex-wrap">
              <MasterWellSummary status="STOP" tag="WELLHEAD M#7" />
              <MasterWellSummary status="ON" tag="WELLHEAD M#13" />
              <MasterWellSummary status="ON" tag="WELLHEAD M#20" />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-md-6 ">
          <div className="card">
            <div className="card-header text-center bg-secondary text-white">
              WATER INJECTOR
            </div>
            <div className="card-body d-flex flex-wrap">
              <MasterWellSummary status="ON" tag="WATER INJECT M#6" />
              <MasterWellSummary status="STOP" tag="WATER INJECT M#8" />
              <MasterWellSummary status="ON" tag="WATER INJECT M#12" />
              <MasterWellSummary status="ON" tag="WATER INJECT M#14" />
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default WellSummary;
