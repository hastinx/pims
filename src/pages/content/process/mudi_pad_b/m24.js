import React, { useState, useEffect } from 'react'
import Wellhead from '../../../../components/Faceplate/master-wellhead'
import { useGetApi } from '../../../../server/Api'
import Swal from "sweetalert2";

const Wellhead24 = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_a/wellhead/m24');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3024)
            setSdvonestatus(data.data.values[0].sdV_1242)
            setSdvtwostatus(data.data.values[0].sdV_1243)
            setPtstatus(data.data.values[0].pT_3024)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead M#24 ' + data.message,
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
            title="M#24"
            pshhTitle="PSHH-3024"
            ptTitle="PT-3024"
            sdvOneTitle="SDV-1242"
            sdvTwoTitle="SDV-1243"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
        />
    )
}

export default Wellhead24