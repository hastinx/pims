import React, { useState, useEffect } from 'react'
import Wellhead from '../../../../components/Faceplate/master-wellhead'
import { useGetApi } from '../../../../server/Api'
import Swal from "sweetalert2";

const Wellhead7 = () => {
    const [sdvOneStatus, setSdvonestatus] = useState('');
    const [sdvTwoStatus, setSdvtwostatus] = useState('');
    const [pshhStatus, Setpshhstatus] = useState('');
    const [ptStatus, setPtstatus] = useState('');

    const GetData = async () => {
        const data = await useGetApi('pad_c/wellhead/m7');
        if (data.error === false) {
            Setpshhstatus(data.data.values[0].pshH_3007)
            setSdvonestatus(data.data.values[0].sdV_1072)
            setSdvtwostatus(data.data.values[0].sdV_1073)
            setPtstatus(data.data.values[0].pT_3007)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Wellhead M#7 ' + data.message,
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
            title="M#7"
            pshhTitle="PSHH-3007"
            ptTitle="PT-3007"
            sdvOneTitle="SDV-1072"
            sdvTwoTitle="SDV-1073"
            sdvOneStatus={sdvOneStatus}
            sdvTwoStatus={sdvTwoStatus}
            pshhStatus={pshhStatus}
            ptStatus={ptStatus}
        />
    )
}

export default Wellhead7