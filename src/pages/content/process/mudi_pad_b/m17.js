import React, { useState, useEffect } from "react";
import Wellhead from "../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../server/Api";
import Swal from "sweetalert2";

const Wellhead17 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState("");
  const [sdvTwoStatus, setSdvtwostatus] = useState("");
  const [pshhStatus, Setpshhstatus] = useState("");
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_b/wellhead/m17");
    if (data.error === false) {
      Setpshhstatus("");
      setSdvonestatus(data.data.values.SDV_3017);
      setSdvtwostatus(data.data.values.SDV_3017);
      setPtstatus(data.data.values.PT_3017);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead M#17 " + data.message,
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
      title="M#17"
      pshhTitle="PSHH-3017"
      ptTitle="PT-3017"
      sdvOneTitle="SDV-1172"
      sdvTwoTitle="SDV-1173"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus.toFixed(1)}
      nav="/process/mudipad-b/wellhead"
    />
  );
};

export default Wellhead17;
