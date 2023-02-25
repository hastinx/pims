import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import WellheadToHeader from '../../../components/Faceplate/wellheadToHeader'
import MasterLayout from '../../../components/Layout'
import { useGetApi } from '../../../server/Api';

const ProcessFlowDiagram = () => {
    const [tag1Status, setTag1Status] = useState(0);
    const [tag2Status, setTag2Status] = useState(0);

    const GetData = async () => {
        const data = await useGetApi("pad_b/process_flow_diagram");
        if (data.error === false) {
            setTag1Status(data.data.values.PT_3200);
            setTag2Status(data.data.values.PT_3201);
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
        }, 500000);

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
                    <WellheadToHeader tag1='PT-3200' tag2='PT-3201' tag1Status={tag1Status} tag2Status={tag2Status} />
                </div>
            </div>
        </MasterLayout>
    )
}

export default ProcessFlowDiagram