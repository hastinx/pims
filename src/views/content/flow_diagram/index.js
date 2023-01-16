import React from 'react';
import MasterLayout from '../../../components/Layout';
import imgFlow from './img/process-flow2.png';
function Productionflow() {
    return (
        <MasterLayout>
            <div className='row mt-4'>
                <div className="col-xl-12 col-md-12">
                    <div className="card border-danger">
                        <div className="card-header fw-semibold text-center text-white bg-danger">
                            SIMPLIFIED PRODUCTION FLOW DIAGRAM
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <img className='img-fluid' src={imgFlow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MasterLayout>
    )
}

export default Productionflow