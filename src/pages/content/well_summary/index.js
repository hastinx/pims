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

  const [status_pad_b_well_2A, setPad_b_well_2A] = useState(0);
  const [status_pad_b_well_4, setPad_b_well_4] = useState(0);
  const [status_pad_b_well_5, setPad_b_well_5] = useState(0);
  const [status_pad_b_well_9, setPad_b_well_9] = useState(0);
  const [status_pad_b_well_15, setPad_b_well_15] = useState(0);
  const [status_pad_b_well_16, setPad_b_well_16] = useState(0);
  const [status_pad_b_well_17, setPad_b_well_17] = useState(0);
  const [status_pad_b_well_18, setPad_b_well_18] = useState(0);
  const [status_pad_b_well_23, setPad_b_well_23] = useState(0);
  const [status_pad_b_well_24, setPad_b_well_24] = useState(0);
  const [status_pad_b_well_25, setPad_b_well_25] = useState(0);
  const [status_pad_b_well_26, setPad_b_well_26] = useState(0);

  const [status_pad_c_well_7, setPad_c_well_7] = useState(0);
  const [status_pad_c_well_13, setPad_c_well_13] = useState(0);
  const [status_pad_c_well_20, setPad_c_well_20] = useState(0);
  const [status_pad_c_well_6, setPad_c_well_6] = useState(0);
  const [status_pad_c_well_8, setPad_c_well_8] = useState(0);
  const [status_pad_c_well_12, setPad_c_well_12] = useState(0);
  const [status_pad_c_well_14, setPad_c_well_14] = useState(0);

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

  const GetDataPadB = async () => {
    const data = await useGetApi("pad_b/well_summary");
    if (data.error === false) {
      setPad_b_well_2A(data.data.values.WELLHEAD_2A);
      setPad_b_well_4(data.data.values.WELLHEAD_4);
      setPad_b_well_5(data.data.values.WELLHEAD_5);
      setPad_b_well_9(data.data.values.WELLHEAD_9);
      setPad_b_well_15(data.data.values.WELLHEAD_15);
      setPad_b_well_16(data.data.values.WELLHEAD_16);
      setPad_b_well_17(data.data.values.WELLHEAD_17);
      setPad_b_well_18(data.data.values.WELLHEAD_18);
      setPad_b_well_23(data.data.values.WELLHEAD_23);
      setPad_b_well_24(data.data.values.WELLHEAD_24);
      setPad_b_well_25(data.data.values.WELLHEAD_25);
      setPad_b_well_26(data.data.values.WELLHEAD_26);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "WellSummary Pad B " + data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const GetDataPadC = async () => {
    const data = await useGetApi("pad_c/well_summary");
    if (data.error === false) {
      setPad_c_well_7(data.data.values.WELLHEAD_7)
      setPad_c_well_13(data.data.values.WELLHEAD_13)
      setPad_c_well_20(data.data.values.WELLHEAD_20)
      setPad_c_well_6(data.data.values.WELLHEAD_6)
      setPad_c_well_8(data.data.values.WELLHEAD_8)
      setPad_c_well_12(data.data.values.WELLHEAD_12)
      setPad_c_well_14(data.data.values.WELLHEAD_14)
    } else {
      Swal.fire({
        title: "Oops!",
        text: "WellSummary Pad B " + data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      GetDataPadA();
      GetDataPadB();
      GetDataPadC();
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
              <MasterWellSummary status={status_pad_b_well_2A} tag="WELLHEAD M#2A" />
              <MasterWellSummary status={status_pad_b_well_4} tag="WELLHEAD M#4" />
              <MasterWellSummary status={status_pad_b_well_5} tag="WELLHEAD M#5" />
              <MasterWellSummary status={status_pad_b_well_9} tag="WELLHEAD M#9" />
              <MasterWellSummary status={status_pad_b_well_15} tag="WELLHEAD M#15" />
              <MasterWellSummary status={status_pad_b_well_16} tag="WELLHEAD M#16" />
              <MasterWellSummary status={status_pad_b_well_17} tag="WELLHEAD M#17" />
              <MasterWellSummary status={status_pad_b_well_18} tag="WELLHEAD M#18" />
              <MasterWellSummary status={status_pad_b_well_23} tag="WELLHEAD M#23" />
              <MasterWellSummary status={status_pad_b_well_24} tag="WELLHEAD M#24" />
              <MasterWellSummary status={status_pad_b_well_25} tag="WELLHEAD M#25" />
              <MasterWellSummary status={status_pad_b_well_26} tag="WELLHEAD M#26" />
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
              <MasterWellSummary status={status_pad_c_well_7} tag="WELLHEAD M#7" />
              <MasterWellSummary status={status_pad_c_well_13} tag="WELLHEAD M#13" />
              <MasterWellSummary status={status_pad_c_well_20} tag="WELLHEAD M#20" />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-md-6 ">
          <div className="card">
            <div className="card-header text-center bg-secondary text-white">
              WATER INJECTOR
            </div>
            <div className="card-body d-flex flex-wrap">
              <MasterWellSummary status={status_pad_c_well_6} tag="WATER INJECT M#6" />
              <MasterWellSummary status={status_pad_c_well_8} tag="WATER INJECT M#8" />
              <MasterWellSummary status={status_pad_c_well_12} tag="WATER INJECT M#12" />
              <MasterWellSummary status={status_pad_c_well_14} tag="WATER INJECT M#14" />
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default WellSummary;
