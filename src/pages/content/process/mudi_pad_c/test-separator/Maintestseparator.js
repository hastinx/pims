import React, { useState, useEffect } from "react";
import Testseparatorlarge from "../../../../../components/Faceplate/master-testseparator-large";
import MasterLayout from "../../../../../components/Layout";
import Swal from "sweetalert2";
import { useGetApi } from "../../../../../server/Api";
import Loader from "../../../../../utils/loader";

function MaintestseparatorC() {
    const [loading, setLoading] = useState(true);
    const [bdv, setBdv1151] = useState("");
    const [esdv1, setEsdv1150] = useState("");
    const [pshh, setPshh1150] = useState("");
    const [lshh1, setLshh1150] = useState("");
    const [esdv2, setEsdv6005] = useState("");
    const [lshh2, setLshh6005] = useState("");

    const GetData = async () => {
        const data = await useGetApi("pad_c/test_separator");
        if (data.error === false) {
            setBdv1151(data.data.values.BDV_1171);
            setEsdv1150(data.data.values.ESDV_1170);
            setPshh1150(data.data.values.PSHH_1170);
            setLshh1150(data.data.values.LSHH_1170);
            setEsdv6005(data.data.values.ESDV_6025);
            setLshh6005(data.data.values.LSHH_6025);
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

        GetData()
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
                                title="TEST SEPARATOR & GAUGING VESSEL MUDI PAD C"
                                inputFrom="FROM WELLPAD MANIFOLD"
                                labelTankSeparator="TANK SEPARATOR"
                                TagTankSeparator="PV-1170"
                                labelTankGauging="VESSEL GAUGING"
                                tagTankGauging="PV-6020"
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
                                tag_bdv="BDV-1171"
                                tag_esdv1="ESDV-1170"
                                tag_pashh="PSHH-1170"
                                tag_lshh1="LSHH-1170"
                                tag_asdv2="ESDV-6025"
                                tag_lshh2="LSHH-6025"
                                tag_ft_1="FT-1170"
                                tag_ft_2="FT-1171"
                                tag_ft_3="FT-1172"
                                tag_ft_4="FT-1173"
                                tag_pcv_1="PCV-1170A"
                                tag_pcv_2="PCV-1170B"
                                tag_lcv_1="LCV-1172"
                                tag_lcv_2="LCV-1170"
                            />
                        </div>
                    </div>
                </MasterLayout>
            )}
        </>
    );
}

export default MaintestseparatorC;
