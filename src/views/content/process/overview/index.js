import React from 'react';
import Pfd from '../../../../components/Faceplate/master-pfd';

import Wellheada from '../mudi_pad_a/wellhead/m1';
import Wellheadb1 from '../mudi_pad_b/m17';
import Wellheadb2 from '../mudi_pad_b/m18';
import Wellheadc1 from '../mudi_pad_c/m3';
import Wellheadc2 from '../mudi_pad_c/m6';
import Testseparator from '../../../../components/Faceplate/master-testseparator';
import MasterLayout from '../../../../components/Layout';

function Processoverview() {
  return (
    <MasterLayout>
      <div className="row mt-4">
        <div className="col-xl-4 col-md-4">
          <Wellheada />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellheadb1 />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellheadc1 />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-xl-4 col-md-4">
          <Testseparator title="MUDI PAD A -TEST SEPARATOR" />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellheadb2 />
        </div>
        <div className="col-xl-4 col-md-4">
          <Wellheadc2 />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-xl-4 col-md-4">
          <Pfd />
        </div>
        <div className="col-xl-4 col-md-4">
          <Testseparator title="MUDI PAD B -TEST SEPARATOR" />
        </div>
        <div className="col-xl-4 col-md-4">
          <Testseparator title="MUDI PAD C -TEST SEPARATOR" />
        </div>
      </div>
    </MasterLayout>
  );
}

export default Processoverview;
