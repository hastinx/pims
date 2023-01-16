import React, { useState, useEffect } from 'react'
import Wellhead from '../../../../components/Faceplate/master-wellhead'
import { useGetApi } from '../../../../server/Api'
import Swal from "sweetalert2";

const Wellhead23 = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_a/wellhead/m23');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3023)
            setSdvonestatus(data.data.values[0].sdV_1232)
            setSdvtwostatus(data.data.values[0].sdV_1233)
            setPtstatus(data.data.values[0].pT_3023)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead M#23 ' + data.message,
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
            title="M#23"
            pshhTitle="PSHH-3023"
            ptTitle="PT-3023"
            sdvOneTitle="SDV-1232"
            sdvTwoTitle="SDV-1233"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
        />
    )
}

export default Wellhead23