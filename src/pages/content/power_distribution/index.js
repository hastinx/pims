import React from 'react'
import MasterLayout from '../../../components/Layout'
import power from '../../../assets/img/power.png'

const PowerDistribution = () => {
    return (
        <MasterLayout>
            <div className='row mt-4'>
                <div className="col-xl-12 col-md-12">
                    <div className="card border-danger">
                        <div className="card-header fw-semibold text-center text-white bg-danger">
                            POWER DISTRIBUTION
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <img className='img-fluid' src={power} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MasterLayout>
    )
}

export default PowerDistribution