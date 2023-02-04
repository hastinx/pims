import React, { useState, useEffect } from 'react'
import Wellhead from '../../../../components/Faceplate/master-wellhead'
import { useGetApi } from '../../../../server/Api'
import Swal from "sweetalert2";

const Wellhead3 = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_c/wellhead/m3');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3003)
            setSdvonestatus(data.data.values[0].sdV_1032)
            setSdvtwostatus(data.data.values[0].sdV_1033)
            setPtstatus(data.data.values[0].pT_3003)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead M#3 ' + data.message,
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
            title="M#3"
            pshhTitle="PSHH-3003"
            ptTitle="PT-3003"
            sdvOneTitle="SDV-1032"
            sdvTwoTitle="SDV-1033"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
            nav="/process/mudipad-c/wellhead"
        />
    )
}

export default Wellhead3