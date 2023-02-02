import React, { useState, useEffect } from 'react'
import Wellhead from '../../../../components/Faceplate/master-wellhead'
import { useGetApi } from '../../../../server/Api'
import Swal from "sweetalert2";

const Wellhead25 = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_a/wellhead/m25');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3025)
            setSdvonestatus(data.data.values[0].sdV_1252)
            setSdvtwostatus(data.data.values[0].sdV_1253)
            setPtstatus(data.data.values[0].pT_3025)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead M#25 ' + data.message,
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
            title="M#25"
            pshhTitle="PSHH-3025"
            ptTitle="PT-3025"
            sdvOneTitle="SDV-1252"
            sdvTwoTitle="SDV-1253"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
        />
    )
}

export default Wellhead25