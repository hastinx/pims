import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2";
import Wellhead from '../../../../../components/Faceplate/master-wellhead';
import { useGetApi } from '../../../../../server/Api';

const Wellhead2a = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_b/wellhead/m17');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3017)
            setSdvonestatus(data.data.values[0].sdV_1172)
            setSdvtwostatus(data.data.values[0].sdV_1173)
            setPtstatus(data.data.values[0].pT_3017)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead M#2A ' + data.message,
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
            title="M#2A"
            pshhTitle="PSHH-302A"
            ptTitle="PT-302A"
            sdvOneTitle="SDV-12A2"
            sdvTwoTitle="SDV-12A3"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
            nav="/process/mudipad-b/wellhead"
        />
    )
}

export default Wellhead2a