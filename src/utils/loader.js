import React from 'react'

import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
    return (

        <div className='loading-screen'><InfinitySpin width='200' color="#0f6eb7" /></div>

    )
}

export default Loader