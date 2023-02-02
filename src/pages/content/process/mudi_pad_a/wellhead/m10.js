import React, { useState, useEffect } from 'react'
import Wellhead from '../../../../../components/Faceplate/master-wellhead'
import { useGetApi } from '../../../../../server/Api'
import Swal from "sweetalert2";

const Wellhead10 = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_a/wellhead/m10');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3010)
            setSdvonestatus(data.data.values[0].sdV_1102)
            setSdvtwostatus(data.data.values[0].sdV_1103)
            setPtstatus(data.data.values[0].pT_3010)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead A#10 ' + data.message,
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
            title="M#10"
            pshhTitle="PSHH-3010"
            ptTitle="PT-3010"
            sdvOneTitle="SDV-1102"
            sdvTwoTitle="SDV-1103"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
        />
    )
}

export default Wellhead10