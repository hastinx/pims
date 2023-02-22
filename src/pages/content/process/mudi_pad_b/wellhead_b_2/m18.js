import React, { useState, useEffect } from "react";
import Wellhead from "../../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../../server/Api";
import Swal from "sweetalert2";

const Wellhead18 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState(0);
  const [sdvTwoStatus, setSdvtwostatus] = useState(0);
  const [pshhStatus, Setpshhstatus] = useState(0);
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_b/wellhead/m18");
    if (data.error === false) {
      Setpshhstatus("");
      setSdvonestatus(data.data.values.SDV_3018);
      setSdvtwostatus(data.data.values.SDV_3018);
      setPtstatus(data.data.values.PT_3018);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead M#18 " + data.message,
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
      title="M#18"
      pshhTitle="PSHH-3018"
      ptTitle="PT-3018"
      sdvOneTitle="SDV-1182"
      sdvTwoTitle="SDV-1183"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus.toFixed(1)}
      nav="/process/mudipad-b/wellhead"
    />
  );
};

export default Wellhead18;
