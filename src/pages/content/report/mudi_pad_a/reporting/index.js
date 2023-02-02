import React from 'react'
import ReportPDF from '../../../../../components/export/pdf';
import MasterLayout from '../../../../../components/Layout';

const ReportMudiPadA = () => {
    return (

        <MasterLayout>
            <div className="row mt-4">
                <div className="col-xl-12 col-md-12">
                    <div className='card'>
                        <div className='card-body'>
                            <ReportPDF filename="trial">
                                <table style={{ border: '1px', width: '100%' }} >
                                    <thead>
                                        <tr>
                                            <th>TAG</th>
                                            <th>VALUE</th>
                                            <th>DATETIME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>TAG</td>
                                            <td>VALUE</td>
                                            <td>DATETIME</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </ReportPDF>
                        </div>
                    </div>

                </div>
            </div>
        </MasterLayout>

    )
}

export default ReportMudiPadA