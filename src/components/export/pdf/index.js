import React, { useEffect } from 'react'
import logo from '../../.../../../assets/img/pims-logo.png'
import style from './report.module.css'
import JsPDF from 'jspdf';

const ReportPDF = ({ filename, children }) => {

    useEffect(() => {
        const report = new JsPDF('portrait', 'pt', 'a4');
        report.html(document.querySelector('#exp-pdf')).then(() => {
            report.save(filename + '.pdf');
        });
    }, [])


    return (
        <>
            <div id='exp-pdf' style={{ width: '595px', height: '842px', margin: '25px' }}>
                <div className={'row ' + style.header}>
                    <div className={'col-md-4 ' + style.header_logo}><img className="pims-logo" src={logo} alt='' /></div>
                    <div className={'col-md-8 ' + style.header_title} style={{ fontSize: '21px' }}>DAILY &nbsp; REPORTING</div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportPDF