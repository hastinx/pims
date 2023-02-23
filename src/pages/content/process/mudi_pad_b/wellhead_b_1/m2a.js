import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Wellhead from "../../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../../server/Api";

const Wellhead2a = () => {
  const [sdvOneStatus, setSdvonestatus] = useState(0);
  const [sdvTwoStatus, setSdvtwostatus] = useState(0);
  const [pshhStatus, Setpshhstatus] = useState(0);
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_b/wellhead/m2a");
    if (data.error === false) {
      Setpshhstatus("0");
      setSdvonestatus(data.data.values.SDV_3002A);
      setSdvtwostatus(data.data.values.SDV_3002A);
      setPtstatus(data.data.values.PT_3002A);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead M#2A " + data.message,
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

  useEffect(() => {
    GetData();
  }, []);

  return (
    <Wellhead
      title="M#2A"
      pshhTitle="PSHH-302A"
      ptTitle="PT-302A"
      sdvOneTitle="SDV-12A2"
      sdvTwoTitle="SDV-12A3"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus ? ptStatus.toFixed(1) : 0}
      nav="/process/mudipad-b/wellhead"
    />
  );
};

export default Wellhead2a;
