import React, { useState, useEffect } from "react";
import Wellhead from "../../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../../server/Api";
import Swal from "sweetalert2";

const Wellhead1 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState("");
  const [sdvTwoStatus, setSdvtwostatus] = useState("");
  const [pshhStatus, Setpshhstatus] = useState("");
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_a/wellhead/m1");
    if (data.error === false) {
      Setpshhstatus("0");
      setSdvonestatus(data.data.values.SDV_3001);
      setSdvtwostatus(data.data.values.SDV_3001);
      setPtstatus(data.data.values.PT_3001);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead A#1 " + data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      GetData();
    }, 10000);

    return () => clearInterval(interval);
  });
  return (
    <Wellhead
      title="M#1"
      pshhTitle="PSHH-3001"
      ptTitle="PT-3001"
      sdvOneTitle="SDV-1012"
      sdvTwoTitle="SDV-1013"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus.toFixed(1)}
      nav="/process/mudipad-a/wellhead"
    />
  );
};

export default Wellhead1;
