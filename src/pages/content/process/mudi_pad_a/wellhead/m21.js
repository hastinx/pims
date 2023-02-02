import React, { useState, useEffect } from 'react'
import Wellhead from '../../../../../components/Faceplate/master-wellhead'
import { useGetApi } from '../../../../../server/Api'
import Swal from "sweetalert2";

const Wellhead21 = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_a/wellhead/m21');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3001)
            setSdvonestatus(data.data.values[0].sdV_1012)
            setSdvtwostatus(data.data.values[0].sdV_1013)
            setPtstatus(data.data.values[0].pT_3001)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead A#21 ' + data.message,
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
            title="M#21"
            pshhTitle="PSHH-3021"
            ptTitle="PT-3021"
            sdvOneTitle="SDV-1212"
            sdvTwoTitle="SDV-1213"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
        />
    )
}

export default Wellhead21