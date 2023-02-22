import React, { useEffect, useState } from 'react';
import Wellhead6 from './m6';
import Wellhead8 from './m8';
import Wellhead12 from './m12';
import MasterLayout from '../../../../../components/Layout';
import Loader from '../../../../../utils/loader';
import Wellhead14 from './m14';

function WaterInjectorPadC() {
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
            <Wellhead6 />
          </div>
          <div className="col-xl-4 col-md-4">
            <Wellhead8 />
          </div>
          <div className="col-xl-4 col-md-4">
            <Wellhead12 />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xl-4 col-md-4">
            <Wellhead14 />
          </div>
        </div>
      </MasterLayout>}
    </>

  );
}


export default WaterInjectorPadC;
