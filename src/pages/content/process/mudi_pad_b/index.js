import React from 'react';
import MasterLayout from '../../../../components/Layout';
import Wellhead17 from './m17';
import Wellhead18 from './m18';
import Wellhead23 from './m23';
import Wellhead24 from './m24';
import Wellhead25 from './m25';
import Wellhead26 from './m26';

function Mainwellheadpadb() {
  return (
    <MasterLayout>
      <div className="row mt-4">
        <div className="col-xl-4 col-md-4">
          <Wellhead17 />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellhead18 />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellhead23 />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-xl-4 col-md-4">
          <Wellhead24 />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellhead25 />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellhead26 />
        </div>
      </div>
    </MasterLayout>
  );
}

export default Mainwellheadpadb;
