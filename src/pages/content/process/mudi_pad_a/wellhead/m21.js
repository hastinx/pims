import React, { useState, useEffect } from "react";
import Wellhead from "../../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../../server/Api";
import Swal from "sweetalert2";

const Wellhead21 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState(0);
  const [sdvTwoStatus, setSdvtwostatus] = useState(0);
  const [pshhStatus, Setpshhstatus] = useState(0);
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_a/wellhead/m21");
    if (data.error === false) {
      Setpshhstatus("0");
      setSdvonestatus(data.data.values.SDV_3021);
      setSdvtwostatus(data.data.values.SDV_3021);
      setPtstatus(data.data.values.PT_3021);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead A#21 " + data.message,
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
      title="M#21"
      pshhTitle="PSHH-3021"
      ptTitle="PT-3021"
      sdvOneTitle="SDV-1212"
      sdvTwoTitle="SDV-1213"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus.toFixed(1)}
    />
  );
};

export default Wellhead21;
