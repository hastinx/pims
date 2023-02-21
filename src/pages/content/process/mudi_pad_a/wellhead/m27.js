import React, { useState, useEffect } from "react";
import Wellhead from "../../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../../server/Api";
import Swal from "sweetalert2";

const Wellhead27 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState("");
  const [sdvTwoStatus, setSdvtwostatus] = useState("");
  const [pshhStatus, Setpshhstatus] = useState("");
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_a/wellhead/m27");
    if (data.error === false) {
      Setpshhstatus("0");
      setSdvonestatus("0");
      setSdvtwostatus("0");
      setPtstatus(
        data.data.values.paD_A_Rack_2_Prgm_MainProgram_SCL_PT_3027_Out_VALUE
      );
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead A#27 " + data.message,
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
      title="M#27"
      pshhTitle="PSHH-3027"
      ptTitle="PT-3027"
      sdvOneTitle="SDV-1272"
      sdvTwoTitle="SDV-1273"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus.toFixed(1)}
    />
  );
};

export default Wellhead27;
