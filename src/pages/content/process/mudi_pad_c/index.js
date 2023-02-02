import React from 'react';
import Wellhead3 from './m3';
import Wellhead6 from './m6';
import Wellhead7 from './m7';
import Wellhead8 from './m8';
import Wellhead12 from './m12';
import Wellhead13 from './m13';
import MasterLayout from '../../../../components/Layout';

function Mainwellheadpadc() {
  return (
    <MasterLayout>
      <div className="row mt-4">
        <div className="col-xl-4 col-md-4">
          <Wellhead3 />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellhead6 />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellhead7 />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-xl-4 col-md-4">
          <Wellhead8 />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellhead12 />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellhead13 />
        </div>
      </div>
    </MasterLayout>
  );
}


export default Mainwellheadpadc;
