import React, { useState, useEffect } from 'react'
import Wellhead from '../../../../../components/Faceplate/master-wellhead'
import { useGetApi } from '../../../../../server/Api'
import Swal from "sweetalert2";

const Wellhead11 = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_a/wellhead/m11');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3011)
            setSdvonestatus(data.data.values[0].sdV_1112)
            setSdvtwostatus(data.data.values[0].sdV_1113)
            setPtstatus(data.data.values[0].pT_3011)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead A#11 ' + data.message,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }
    useEffect(() => {
        GetData();
    }, []);

    return (
        <Wellhead
            title="M#11"
            pshhTitle="PSHH-3011"
            ptTitle="PT-3011"
            sdvOneTitle="SDV-1112"
            sdvTwoTitle="SDV-1113"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
        />
    )
}

export default Wellhead11