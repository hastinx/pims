import React, { useState, useEffect } from 'react'
import Wellhead from '../../../../components/Faceplate/master-wellhead'
import { useGetApi } from '../../../../server/Api'
import Swal from "sweetalert2";

const Wellhead6 = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_c/wellhead/m6');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3006)
            setSdvonestatus(data.data.values[0].sdV_1062)
            setSdvtwostatus(data.data.values[0].sdV_1063)
            setPtstatus(data.data.values[0].pT_3006)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead M#6 ' + data.message,
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
            title="M#6"
            pshhTitle="PSHH-3006"
            ptTitle="PT-3006"
            sdvOneTitle="SDV-1062"
            sdvTwoTitle="SDV-1063"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
            nav="/process/mudipad-c/wellhead"
        />
    )
}

export default Wellhead6