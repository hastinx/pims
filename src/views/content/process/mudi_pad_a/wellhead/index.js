import React from 'react';
import MasterLayout from '../../../../../components/Layout';
import Wellhead1 from './m1';
import Wellhead10 from './m10';
import Wellhead11 from './m11';
import Wellhead19 from './m19';
import Wellhead21 from './m21';
import Wellhead22 from './m22';

function Mainwellheadpada() {
  return (
    <MasterLayout>
      <div className="row mt-4">
        <div className="col-xl-4 col-md-4">
          <Wellhead1 />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellhead10 />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellhead11 />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-xl-4 col-md-4">
          <Wellhead19 />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellhead21 />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellhead22 />
        </div>
      </div>
    </MasterLayout>
  );
}

export default Mainwellheadpada;
