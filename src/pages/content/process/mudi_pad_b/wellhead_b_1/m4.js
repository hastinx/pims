import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Wellhead from "../../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../../server/Api";

const Wellhead4 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState(0);
  const [sdvTwoStatus, setSdvtwostatus] = useState(0);
  const [pshhStatus, Setpshhstatus] = useState(0);
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_b/wellhead/m4");
    if (data.error === false) {
      Setpshhstatus("");
      setSdvonestatus(data.data.values.SDV_3004);
      setSdvtwostatus(data.data.values.SDV_3004);
      setPtstatus(data.data.values.PT_3004);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead M#4 " + data.message,
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
      title="M#4"
      pshhTitle="PSHH-3004"
      ptTitle="PT-3004"
      sdvOneTitle="SDV-1042"
      sdvTwoTitle="SDV-1043"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus ? ptStatus.toFixed(1) : 0}
      nav="/process/mudipad-b/wellhead"
    />
  );
};

export default Wellhead4;
