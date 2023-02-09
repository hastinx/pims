import React from 'react'
import MasterLayout from '../../../components/Layout'
import PetaLokasi from '../../../components/Peta'

const Peta = () => {
    return (
        <MasterLayout>
            <div className='card large mt-4' >
                <div className='card-body'>
                    <PetaLokasi />
                </div>
            </div>
        </MasterLayout>
    )
}

export default Peta