import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Wellhead from "../../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../../server/Api";

const Wellhead9 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState(0);
  const [sdvTwoStatus, setSdvtwostatus] = useState(0);
  const [pshhStatus, Setpshhstatus] = useState(0);
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_b/wellhead/m9");
    if (data.error === false) {
      Setpshhstatus("");
      setSdvonestatus(data.data.values.SDV_3009);
      setSdvtwostatus(data.data.values.SDV_3009);
      setPtstatus(data.data.values.PT_3009);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead M#9 " + data.message,
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
      title="M#9"
      pshhTitle="PSHH-3009"
      ptTitle="PT-3009"
      sdvOneTitle="SDV-1092"
      sdvTwoTitle="SDV-1093"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus.toFixed}
      nav="/process/mudipad-b/wellhead"
    />
  );
};

export default Wellhead9;
