import React, { useEffect, useState } from 'react';
import Wellhead3 from './m3';
import Wellhead7 from './m7';
import Wellhead13 from './m13';
import MasterLayout from '../../../../../components/Layout';
import Loader from '../../../../../utils/loader';
import Wellhead20 from './m20';

function Mainwellheadpadc() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <>
      {loading ? <Loader /> : <MasterLayout>
        <div className="row mt-4">
          <div className="col-xl-4 col-md-4">
            <Wellhead3 />
          </div>
          <div className="col-xl-4 col-md-4">
            <Wellhead7 />
          </div>
          <div className="col-xl-4 col-md-4">
            <Wellhead13 />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xl-4 col-md-4">
            <Wellhead20 />
          </div>

        </div>
      </MasterLayout>}
    </>

  );
}


export default Mainwellheadpadc;
