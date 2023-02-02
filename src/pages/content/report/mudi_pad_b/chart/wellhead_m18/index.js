import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Chart from '../../../../../../components/Chart'
import { useGetApi } from '../../../../../../server/Api'

const WellheadM18Chart = () => {
    const [ySeriesName1, setySeriesName1] = useState('')
    const [ySeriesName2, setySeriesName2] = useState('')
    const [y_title, setYTitle] = useState('')
    const [x_data, setXData] = useState([])
    const [y_data1, setYData1] = useState([])
    const [y_data2, setYData2] = useState([])

    const GetData = async () => {
        const data = await useGetApi('pad_a/wellhead/m10/chart');
        if (data.error === false) {
            console.log(data.data.values)
            let yData1 = data.data.values.data.map(i => i.pshH_3010)
            let yData2 = data.data.values.data.map(i => i.pT_3010)
            let xData = data.data.values.data.map(i => i.created_at)
            let vTitle = data.data.values.title.toUpperCase()
            let fTitle = vTitle.replace('_', '-')
            setySeriesName1(data.data.values.series_name1)
            setySeriesName2(data.data.values.series_name2)
            setYData1(yData1)
            setYData2(yData2)
            setXData(xData)
            setYTitle(fTitle)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: ' Chart Wellhead M#1 ' + data.message,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <>

            <Chart
                head_title="M#18"
                y_series_name1={ySeriesName1}
                y_series_name2={ySeriesName2}
                y_title={y_title}
                x_data={x_data}
                y_data1={y_data1}
                y_data2={y_data2} />

        </>
    )
}

export default WellheadM18Chart