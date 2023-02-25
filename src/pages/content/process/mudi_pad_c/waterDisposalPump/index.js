import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import WaterDisposalSatu from '../../../../../components/Faceplate/waterDisposal/waterDisposalSatu'
import MasterLayout from '../../../../../components/Layout'
import { useGetApi } from '../../../../../server/Api';

const WaterDisposalPump = () => {
    const [tag1Status, setTag1Status] = useState(0);
    const [tag2Status, setTag2Status] = useState(0);
    const [tag3Status, setTag3Status] = useState(0);

    const GetData = async () => {
        const data = await useGetApi("pad_c/flowmeter");
        if (data.error === false) {
            setTag1Status(data.data.values.FQI_2009);
            setTag2Status(data.data.values.FQI_2010);
            setTag3Status(data.data.values.FQI_2011);
        } else {
            Swal.fire({
                title: "Oops!",
                text: "Water disposal pump " + data.message,
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            GetData();
        }, 5000);

        return () => clearInterval(interval);
    });

    useEffect(() => {
        GetData();
    }, []);
    return (
        <MasterLayout>
            <div className='row mt-4'>
                <div className='col-md-12'>
                    <WaterDisposalSatu
                        tag1='FQI-2009'
                        tag2='FQI-2010'
                        tag3='FQI-2011'
                        tag1Status={tag1Status}
                        tag2Status={tag2Status}
                        tag3Status={tag3Status}
                    />
                </div>
            </div>

        </MasterLayout>
    )
}

export default WaterDisposalPump