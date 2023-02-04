import React, { useState, useEffect } from 'react'
import Wellhead from '../../../../components/Faceplate/master-wellhead'
import { useGetApi } from '../../../../server/Api'
import Swal from "sweetalert2";

const Wellhead13 = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_c/wellhead/m13');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3013)
            setSdvonestatus(data.data.values[0].sdV_1132)
            setSdvtwostatus(data.data.values[0].sdV_1133)
            setPtstatus(data.data.values[0].pT_3013)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead M#13 ' + data.message,
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
            title="M#13"
            pshhTitle="PSHH-3013"
            ptTitle="PT-3013"
            sdvOneTitle="SDV-1132"
            sdvTwoTitle="SDV-1133"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
        />
    )
}

export default Wellhead13