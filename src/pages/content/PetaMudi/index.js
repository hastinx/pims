import React from 'react'
import MasterLayout from '../../../components/Layout'
import PetaLokasi from '../../../components/Peta'

const index = () => {
    return (
        <MasterLayout>
            <div className="row mt-4">
                <div className="col-xl-12 col-md-12">
                    <PetaLokasi />
                </div>
            </div>
        </MasterLayout>

    )
}

export default index