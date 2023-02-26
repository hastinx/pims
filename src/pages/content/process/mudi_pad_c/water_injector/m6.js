import React, { useState, useEffect } from "react";
import { useGetApi } from "../../../../../server/Api";
import Swal from "sweetalert2";
import WaterInjection from "../../../../../components/Faceplate/master-water-injection";

const Wellhead6 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState(0);
  const [sdvTwoStatus, setSdvtwostatus] = useState(0);
  const [pshhStatus, Setpshhstatus] = useState(0);
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_c/wellhead/m6");
    if (data.error === false) {
      Setpshhstatus("0");
      setSdvonestatus(data.data.values.SDV_3006);
      setSdvtwostatus(data.data.values.SDV_3006);
      setPtstatus(data.data.values.PT_3006);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead M#6 " + data.message,
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
      title="M#6"
      pshhTitle="PSHH-3006"
      ptTitle="PT-3006"
      sdvOneTitle="SDV-1062"
      sdvTwoTitle="SDV-1063"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus ? ptStatus.toFixed(1) : 0}
      nav="/process/mudipad-c/wellhead"
    />
  );
};

export default Wellhead6;
