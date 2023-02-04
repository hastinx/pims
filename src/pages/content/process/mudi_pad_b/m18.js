import React, { useState, useEffect } from 'react'
import Wellhead from '../../../../components/Faceplate/master-wellhead'
import { useGetApi } from '../../../../server/Api'
import Swal from "sweetalert2";

const Wellhead18 = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_b/wellhead/m18');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3018)
            setSdvonestatus(data.data.values[0].sdV_1182)
            setSdvtwostatus(data.data.values[0].sdV_1183)
            setPtstatus(data.data.values[0].pT_3018)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead M#18 ' + data.message,
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
            title="M#18"
            pshhTitle="PSHH-3018"
            ptTitle="PT-3018"
            sdvOneTitle="SDV-1182"
            sdvTwoTitle="SDV-1183"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
            nav="/process/mudipad-b/wellhead"
        />
    )
}

export default Wellhead18