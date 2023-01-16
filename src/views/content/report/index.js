import React from 'react'
import Chart from '../../../components/Chart'
import MasterLayout from '../../../components/Layout'


const ChartGrafik = () => {
    return (
        <MasterLayout>
            <div className="row mt-4">
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <Chart seriesname='PSHH-3001' yaxis_title='PSHH-3001' />
                        </div>



                    </div>
                </div>
            </div>
        </MasterLayout>
    )
}

export default ChartGrafik