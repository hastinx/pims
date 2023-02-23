import React, { useState, useEffect } from "react";
import Wellhead from "../../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../../server/Api";
import Swal from "sweetalert2";

const Wellhead10 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState(0);
  const [sdvTwoStatus, setSdvtwostatus] = useState(0);
  const [pshhStatus, Setpshhstatus] = useState(0);
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_a/wellhead/m10");
    if (data.error === false) {
      Setpshhstatus("0");
      setSdvonestatus(data.data.values.SDV_3010);
      setSdvtwostatus(data.data.values.SDV_3010);
      setPtstatus(data.data.values.PT_3010);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead A#10 " + data.message,
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
      title="M#10"
      pshhTitle="PSHH-3010"
      ptTitle="PT-3010"
      sdvOneTitle="SDV-1102"
      sdvTwoTitle="SDV-1103"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus ? ptStatus.toFixed(1) : 0}
    />
  );
};

export default Wellhead10;
