import React, { useState, useEffect } from "react";
import Wellhead from "../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../server/Api";
import Swal from "sweetalert2";

const Wellhead13 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState("");
  const [sdvTwoStatus, setSdvtwostatus] = useState("");
  const [pshhStatus, Setpshhstatus] = useState("");
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_c/wellhead/m13");
    if (data.error === false) {
      Setpshhstatus("0");
      setSdvonestatus(data.data.values.SDV_3013);
      setSdvtwostatus(data.data.values.SDV_3013);
      setPtstatus(data.data.values.PT_3013);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead M#13 " + data.message,
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
      title="M#13"
      pshhTitle="PSHH-3013"
      ptTitle="PT-3013"
      sdvOneTitle="SDV-1132"
      sdvTwoTitle="SDV-1133"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus.toFixed(1)}
    />
  );
};

export default Wellhead13;
