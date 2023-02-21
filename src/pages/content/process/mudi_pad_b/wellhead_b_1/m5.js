import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Wellhead from "../../../../../components/Faceplate/master-wellhead";
import { useGetApi } from "../../../../../server/Api";

const Wellhead5 = () => {
  const [sdvOneStatus, setSdvonestatus] = useState("");
  const [sdvTwoStatus, setSdvtwostatus] = useState("");
  const [pshhStatus, Setpshhstatus] = useState("");
  const [ptStatus, setPtstatus] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_b/wellhead5");
    if (data.error === false) {
      Setpshhstatus("OPEN");
      setSdvonestatus("OPEN");
      setSdvtwostatus("OPEN");
      setPtstatus(
        data.data.values.paD_B_Rack_2_Prgm_MainProgram_ALMA_PT_3005_In_VALUE
      );
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Wellhead M#5 " + data.message,
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
      title="M#5"
      pshhTitle="PSHH-3005"
      ptTitle="PT-3005"
      sdvOneTitle="SDV-1052"
      sdvTwoTitle="SDV-1053"
      sdvOneStatus={sdvOneStatus}
      sdvTwoStatus={sdvTwoStatus}
      pshhStatus={pshhStatus}
      ptStatus={ptStatus.toFixed(1)}
      nav="/process/mudipad-b/wellhead"
    />
  );
};

export default Wellhead5;
