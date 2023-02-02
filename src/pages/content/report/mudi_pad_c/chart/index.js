import React from "react";
import MasterLayout from "../../../../../components/Layout";
import WellheadM3Chart from "./wellhead_m3";
import WellheadM6Chart from "./wellhead_m6";
import WellheadM7Chart from "./wellhead_m7";
import WellheadM8Chart from "./wellhead_m8";
import WellheadM12Chart from "./wellhead_m12";
import WellheadM13Chart from "./wellhead_m13";

const ChartMudiPadC = () => {

    return (
        <MasterLayout>

            <div id='exp-pdf'>

                <div className="row mt-4">
                    <div className="col-xl-6 col-md-6">
                        <WellheadM3Chart />
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <WellheadM6Chart />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-xl-6 col-md-6">
                        <WellheadM7Chart />
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <WellheadM8Chart />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-xl-6 col-md-6">
                        <WellheadM12Chart />
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <WellheadM13Chart />
                    </div>
                </div>
            </div>
        </MasterLayout>
    )
}
export default ChartMudiPadC