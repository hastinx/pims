import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import WellheadToHeader from '../../../components/Faceplate/wellheadToHeader'
import MasterLayout from '../../../components/Layout'
import { useGetApi } from '../../../server/Api';

const ProcessFlowDiagram = () => {
    const [tag1Status, setTag1Status] = useState(0);

    const GetData = async () => {
        const data = await useGetApi("pad_b/process_flow_diagram");
        if (data.error === false) {
            setTag1Status(data.data.values.PT_3200);
        } else {
            Swal.fire({
                title: "Oops!",
                text: "Process Flow Mudi " + data.message,
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
            <div className='card large mt-4'>
                <div className='card-header text-center bg-secondary text-white'>Process Flow Diagram MUDI</div>
                <div className='card-body bg-gray'>
                    <WellheadToHeader tag1='PT-3200' tag2='PT-3100' tag3='PT-3300' tag4='PT-3400' tag1Status={tag1Status.toFixed(1)} tag2Status='0.00' tag3Status='0.00' tag4Status='0.00' />
                </div>
            </div>
        </MasterLayout>
    )
}

export default ProcessFlowDiagram