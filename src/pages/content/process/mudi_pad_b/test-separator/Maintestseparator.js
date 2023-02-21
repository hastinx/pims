import React, { useState, useEffect } from 'react'
import Testseparatorlarge from '../../../../../components/Faceplate/master-testseparator-large'
import MasterLayout from '../../../../../components/Layout'
import Swal from 'sweetalert2'
import { useGetApi } from '../../../../../server/Api'

function MaintestseparatorB() {
    const [bdv1151, setBdv1151] = useState("")
    const [esdv1150, setEsdv1150] = useState("")
    const [pshh1150, setPshh1150] = useState("")
    const [lshh1150, setLshh1150] = useState("")
    const [esdv6005, setEsdv6005] = useState("")
    const [lshh6005, setLshh6005] = useState("")

    const GetData = async () => {
        const data = await useGetApi('pad_a/test_separator');
        if (data.error === false) {
            setBdv1151(data.data.values[0].bdV_1151)
            setEsdv1150(data.data.values[0].esdV_1150)
            setPshh1150(data.data.values[0].pshH_1150)
            setLshh1150(data.data.values[0].lshH_1150)
            setEsdv6005(data.data.values[0].esdV_6005)
            setLshh6005(data.data.values[0].lshH_6005)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Test Separator' + data.message,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }

    useEffect(() => {
        GetData();
    }, []);



    return (
        <MasterLayout>
            <div className="row mt-4">
                <div className="col-xl-12 col-md-12">
                    <Testseparatorlarge
                        title="TEST SEPARATOR & GAUGING VESSEL MUDI PAD B"
                        inputFrom='FROM WELLPAD MANIFOLD'
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
                        bdvStatus={bdv1151.toUpperCase()}
                        esdv1Status={esdv1150.toUpperCase()}
                        pshhStatus={pshh1150.toUpperCase()}
                        lshh1Status={lshh1150.toUpperCase()}
                        esdv2Status={esdv6005.toUpperCase()}
                        lshh2Status={lshh6005.toUpperCase()}
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
    )
}

export default MaintestseparatorB