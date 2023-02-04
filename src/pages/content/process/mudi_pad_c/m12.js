import React, { useState, useEffect } from 'react'
import Wellhead from '../../../../components/Faceplate/master-wellhead'
import { useGetApi } from '../../../../server/Api'
import Swal from "sweetalert2";

const Wellhead12 = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_c/wellhead/m12');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3012)
            setSdvonestatus(data.data.values[0].sdV_1122)
            setSdvtwostatus(data.data.values[0].sdV_1123)
            setPtstatus(data.data.values[0].pT_3012)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead M#12 ' + data.message,
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
            title="M#12"
            pshhTitle="PSHH-3012"
            ptTitle="PT-3012"
            sdvOneTitle="SDV-1122"
            sdvTwoTitle="SDV-1123"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
        />
    )
}

export default Wellhead12