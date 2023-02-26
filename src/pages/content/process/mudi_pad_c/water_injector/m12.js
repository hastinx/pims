import React, { useState, useEffect } from "react";
import { useGetApi } from "../../../../../server/Api";
import Swal from "sweetalert2";
import WaterInjection from "../../../../../components/Faceplate/master-water-injection";

const Wellhead12 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState(0);
  const [sdvTwoStatus, setSdvtwostatus] = useState(0);
  const [pshhStatus, Setpshhstatus] = useState(0);
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_c/wellhead/m12");
    if (data.error === false) {
      Setpshhstatus("0");
      setSdvonestatus(data.data.values.SDV_3012);
      setSdvtwostatus(data.data.values.SDV_3012);
      setPtstatus(data.data.values.PT_3012);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead M#12 " + data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      GetData();
    }, 5000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    GetData();
  }, []);

  return (
    <WaterInjection
      title="M#12"
      pshhTitle="PSHH-3012"
      ptTitle="PT-3012"
      sdvOneTitle="SDV-1122"
      sdvTwoTitle="SDV-1123"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus ? ptStatus.toFixed(1) : 0}
    />
  );
};

export default Wellhead12;
