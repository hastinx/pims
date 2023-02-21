import React, { useState, useEffect } from "react";
import Wellhead from "../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../server/Api";
import Swal from "sweetalert2";

const Wellhead7 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState("");
  const [sdvTwoStatus, setSdvtwostatus] = useState("");
  const [pshhStatus, Setpshhstatus] = useState("");
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_c/wellhead/m7");
    if (data.error === false) {
      Setpshhstatus("0");
      setSdvonestatus(data.data.values.SDV_3007);
      setSdvtwostatus(data.data.values.SDV_3007);
      setPtstatus(data.data.values.PT_3007);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead M#7 " + data.message,
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
      title="M#7"
      pshhTitle="PSHH-3007"
      ptTitle="PT-3007"
      sdvOneTitle="SDV-1072"
      sdvTwoTitle="SDV-1073"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus.toFixed(1)}
    />
  );
};

export default Wellhead7;
