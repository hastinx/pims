import React, { useState, useEffect } from "react";
import Wellhead from "../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../server/Api";
import Swal from "sweetalert2";

const Wellhead8 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState("");
  const [sdvTwoStatus, setSdvtwostatus] = useState("");
  const [pshhStatus, Setpshhstatus] = useState("");
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
    }, 10000);

    return () => clearInterval(interval);
  });

  return (
    <Wellhead
      title="M#8"
      pshhTitle="PSHH-3008"
      ptTitle="PT-3008"
      sdvOneTitle="SDV-1082"
      sdvTwoTitle="SDV-1083"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus.toFixed(1)}
    />
  );
};

export default Wellhead8;
