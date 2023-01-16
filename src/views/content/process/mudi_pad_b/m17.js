import React, { useState, useEffect } from 'react'
import Wellhead from '../../../../components/Faceplate/master-wellhead'
import { useGetApi } from '../../../../server/Api'
import Swal from "sweetalert2";

const Wellhead17 = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_a/wellhead/m17');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3017)
            setSdvonestatus(data.data.values[0].sdV_1172)
            setSdvtwostatus(data.data.values[0].sdV_1173)
            setPtstatus(data.data.values[0].pT_3017)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead A#17 ' + data.message,
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
            title="M#17"
            pshhTitle="PSHH-3017"
            ptTitle="PT-3017"
            sdvOneTitle="SDV-1172"
            sdvTwoTitle="SDV-1173"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
        />
    )
}

export default Wellhead17