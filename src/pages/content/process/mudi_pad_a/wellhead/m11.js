import React, { useState, useEffect } from "react";
import Wellhead from "../../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../../server/Api";
import Swal from "sweetalert2";

const Wellhead11 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState(0);
  const [sdvTwoStatus, setSdvtwostatus] = useState(0);
  const [pshhStatus, Setpshhstatus] = useState(0);
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_a/wellhead/m11");
    if (data.error === false) {
      Setpshhstatus("0");
      setSdvonestatus(data.data.values.SDV_3011);
      setSdvtwostatus(data.data.values.SDV_3011);
      setPtstatus(data.data.values.PT_3011);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead A#11 " + data.message,
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
      title="M#11"
      pshhTitle="PSHH-3011"
      ptTitle="PT-3011"
      sdvOneTitle="SDV-1112"
      sdvTwoTitle="SDV-1113"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus.toFixed(1)}
    />
  );
};

export default Wellhead11;
