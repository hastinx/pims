import React, { useState, useEffect } from "react";
import Wellhead from "../../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../../server/Api";
import Swal from "sweetalert2";

const Wellhead3 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState(0);
  const [sdvTwoStatus, setSdvtwostatus] = useState(0);
  const [pshhStatus, Setpshhstatus] = useState(0);
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_c/wellhead/m3");
    if (data.error === false) {
      Setpshhstatus("0");
      setSdvonestatus(data.data.values.SDV_3003);
      setSdvtwostatus(data.data.values.SDV_3003);
      setPtstatus(data.data.values.PT_3003);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead M#3 " + data.message,
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
    <Wellhead
      title="M#3"
      pshhTitle="PSHH-3003"
      ptTitle="PT-3003"
      sdvOneTitle="SDV-1032"
      sdvTwoTitle="SDV-1033"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus ? ptStatus.toFixed(1) : 0}
      nav="/process/mudipad-c/wellhead"
    />
  );
};

export default Wellhead3;
