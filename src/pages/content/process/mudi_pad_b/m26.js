import React, { useState, useEffect } from 'react'
import Wellhead from '../../../../components/Faceplate/master-wellhead'
import { useGetApi } from '../../../../server/Api'
import Swal from "sweetalert2";

const Wellhead26 = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_a/wellhead/m26');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3026)
            setSdvonestatus(data.data.values[0].sdV_1262)
            setSdvtwostatus(data.data.values[0].sdV_1263)
            setPtstatus(data.data.values[0].pT_3026)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead M#26 ' + data.message,
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
            title="M#26"
            pshhTitle="PSHH-3026"
            ptTitle="PT-3026"
            sdvOneTitle="SDV-1262"
            sdvTwoTitle="SDV-1263"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
        />
    )
}

export default Wellhead26