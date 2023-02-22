import React, { useState, useEffect } from "react";
import Testseparatorlarge from "../../../../../components/Faceplate/master-testseparator-large";
import MasterLayout from "../../../../../components/Layout";
import Swal from "sweetalert2";
import { useGetApi } from "../../../../../server/Api";
import Loader from "../../../../../utils/loader";

function MaintestseparatorB() {
  const [loading, setLoading] = useState(true);
  const [bdv, setBdv1151] = useState("");
  const [esdv1, setEsdv1150] = useState("");
  const [pshh, setPshh1150] = useState("");
  const [lshh1, setLshh1150] = useState("");
  const [esdv2, setEsdv6005] = useState("");
  const [lshh2, setLshh6005] = useState("");

  const GetData = async () => {
    const data = await useGetApi("pad_b/test_separator");
    if (data.error === false) {
      setBdv1151(data.data.values.BDV_1161);
      setEsdv1150(data.data.values.ESDV_1160);
      setPshh1150(data.data.values.PSHH_1160);
      setLshh1150(data.data.values.LSHH_1160);
      setEsdv6005(data.data.values.ESDV_6015);
      setLshh6005(data.data.values.LSHH_6015);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Test Separator" + data.message,
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
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <MasterLayout>
          <div className="row mt-4">
            <div className="col-xl-12 col-md-12">
              <Testseparatorlarge
                title="TEST SEPARATOR & GAUGING VESSEL MUDI PAD B"
                inputFrom="FROM WELLPAD MANIFOLD"
                labelTankSeparator="TANK SEPARATOR"
                TagTankSeparator="PV-1160"
                labelTankGauging="VESSEL GAUGING"
                tagTankGauging="PV-6010"
                toOne="TO WELLPAD MANIFOLD"
                toTwo="TO FLARE"
                toThree="TO WELLPAD MANIFOLD"
                toFour="TO WELLPAD MANIFOLD"
                toFive="TO GAUGING VESSEL"
                toSix="TO WELLPAD MANIFOLD"
                toSeven="TO GAUGING VESSEL"
                toEight="TO WELLPAD MANIFOLD"
                toNine="TO GAUGING VESSEL"
                bdvStatus={bdv}
                esdv1Status={esdv1}
                pshhStatus={pshh}
                lshh1Status={lshh1}
                esdv2Status={esdv2}
                lshh2Status={lshh2}
                tag_bdv="BDV-1161"
                tag_esdv1="ESDV-1160"
                tag_pashh="PSHH-1160"
                tag_lshh1="LSHH-1160"
                tag_asdv2="ESDV-6015"
                tag_lshh2="LSHH-6015"
                tag_ft_1="FT-1160"
                tag_ft_2="FT-1161"
                tag_ft_3="FT-1162"
                tag_ft_4="FT-1163"
                tag_pcv_1="PCV-1160A"
                tag_pcv_2="PCV-1160B"
                tag_lcv_1="LCV-1162"
                tag_lcv_2="LCV-1160"
              />
            </div>
          </div>
        </MasterLayout>
      )}
    </>
  );
}

export default MaintestseparatorB;
