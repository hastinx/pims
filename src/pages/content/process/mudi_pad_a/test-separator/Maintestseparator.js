import React, { useState, useEffect } from "react";
import Testseparatorlarge from "../../../../../components/Faceplate/master-testseparator-large";
import MasterLayout from "../../../../../components/Layout";
import Swal from "sweetalert2";
import { useGetApi } from "../../../../../server/Api";
import Loader from "../../../../../utils/loader";

function Maintestseparator() {
  const [loading, setLoading] = useState(true)
  const [bdv, setBdv1151] = useState(0);
  const [esdv1, setEsdv1150] = useState(0);
  const [pshh, setPshh1150] = useState(0);
  const [lshh1, setLshh1150] = useState(0);
  const [esdv2, setEsdv6005] = useState(0);
  const [lshh2, setLshh6005] = useState(0);

  const GetData = async () => {
    const data = await useGetApi("pad_a/test_separator");
    console.log(data);
    if (data.error === false) {
      setBdv1151(data.data.values.BDV_1151);
      setEsdv1150(data.data.values.ESDV_1150);
      setPshh1150(data.data.values.PSHH_1150);
      setLshh1150(data.data.values.LSHH_1150);
      setEsdv6005("");
      setLshh6005("");
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
    }, 5000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 1000)

    GetData()
  }, [])

  return (
    <>{loading ? <Loader /> : <MasterLayout>
      <div className="row mt-4">
        <div className="col-xl-12 col-md-12">
          <Testseparatorlarge
            title="TEST SEPARATOR & GAUGING VESSEL MUDI PAD A"
            inputFrom="FROM WELLPAD MANIFOLD"
            labelTankSeparator="TANK SEPARATOR"
            TagTankSeparator="PV-1150"
            labelTankGauging="VESSEL GAUGING"
            tagTankGauging="PV-6000"
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
            tag_bdv="BDV-1151"
            tag_esdv1="ESDV-1150"
            tag_pashh="PSHH-1150"
            tag_lshh1="LSHH-1150"
            tag_asdv2="ESDV-6005"
            tag_lshh2="LSHH-6005"
            tag_ft_1="FT-1150"
            tag_ft_2="FT-1151"
            tag_ft_3="FT-1152"
            tag_ft_4="FT-1153"
            tag_pcv_1="PCV-1150A"
            tag_pcv_2="PCV-1150B"
            tag_lcv_1="LCV-1152"
            tag_lcv_2="LCV-1150"
          />
        </div>
      </div>
    </MasterLayout>}</>

  );
}

export default Maintestseparator;
