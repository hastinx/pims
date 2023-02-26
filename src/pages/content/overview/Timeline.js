import React from 'react';
import './timeline.css';
import background from '../../../assets/img/bg4.png'

function Timeline() {
    return (
        <>

            <div className="card border-primary">
                <div className="card-header fw-semibold text-center text-white bg-primary">
                    CONTRACT SUMMARY
                </div>
                <div className="card-body" style={{
                    backgroundImage: "url(" + background + ")", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                }}>
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{ display: 'inline-block', width: '100%', overflowY: 'auto' }}>
                                <ul className="timeline timeline-horizontal">
                                    <li className="timeline-item">
                                        <div className="timeline-badge primary"><i className="glyphicon glyphicon-check"></i></div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4 className="timeline-title">29 Feb 1988</h4>
                                                <p></p>
                                            </div>
                                            <div className="timeline-body">
                                                <p>JOB PERTAMINA TREND TUBAN JOB PTT</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-badge success"><i className="glyphicon glyphicon-check"></i></div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4 className="timeline-title">1993</h4>
                                                <p></p>
                                            </div>
                                            <div className="timeline-body">
                                                <p>JOB PERTAMINA Santa Fe Tuban</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-badge info"><i className="glyphicon glyphicon-check"></i></div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4 className="timeline-title">2001</h4>
                                                <p></p>
                                            </div>
                                            <div className="timeline-body">
                                                <p>JOB PERTAMINA DEVON TUBAN</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-badge danger"><i className="glyphicon glyphicon-check"></i></div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4 className="timeline-title">2002</h4>
                                                <p></p>
                                            </div>
                                            <div className="timeline-body">
                                                <p>JOB PERTAMINA PETROCHINA EAST JAVA (JOB PEJ)</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <div className="timeline-badge warning"><i className="glyphicon glyphicon-check"></i></div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4 className="timeline-title">20 Mei 2018</h4>
                                                <p></p>
                                            </div>
                                            <div className="timeline-body">
                                                <p>PHE TUBAN EAST JAVA</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline