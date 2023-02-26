import React, { useState, useEffect } from "react";
import { useGetApi } from "../../../../../server/Api";
import Swal from "sweetalert2";
import WaterInjection from "../../../../../components/Faceplate/master-water-injection";

const Wellhead8 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState(0);
  const [sdvTwoStatus, setSdvtwostatus] = useState(0);
  const [pshhStatus, Setpshhstatus] = useState(0);
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_c/wellhead/m8");
    if (data.error === false) {
      Setpshhstatus("0");
      setSdvonestatus(data.data.values.SDV_3008);
      setSdvtwostatus(data.data.values.SDV_3008);
      setPtstatus(data.data.values.PT_3008);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead M#8 " + data.message,
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
      title="M#8"
      pshhTitle="PSHH-3008"
      ptTitle="PT-3008"
      sdvOneTitle="SDV-1082"
      sdvTwoTitle="SDV-1083"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus ? ptStatus.toFixed(1) : 0}
    />
  );
};

export default Wellhead8;
