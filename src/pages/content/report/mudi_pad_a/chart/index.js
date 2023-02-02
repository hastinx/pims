import React from "react";
import MasterLayout from "../../../../../components/Layout";
import WellheadM1Chart from "./wellhead_m1";
import WellheadM10Chart from "./wellhead_m10";
import WellheadM11Chart from "./wellhead_m11";
import WellheadM21Chart from "./wellhead_m21";
import WellheadM19Chart from "./wellhead_m19";
import WellheadM22Chart from "./wellhead_m22";

const ChartMudiPadA = () => {
    return (
        <MasterLayout>
            <div className="row mt-4">
                <div className="col-xl-6 col-md-6">
                    <WellheadM1Chart />
                </div>
                <div className="col-xl-6 col-md-6">
                    <WellheadM10Chart />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-6 col-md-6">
                    <WellheadM11Chart />
                </div>
                <div className="col-xl-6 col-md-6">
                    <WellheadM19Chart />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-6 col-md-6">
                    <WellheadM21Chart />
                </div>
                <div className="col-xl-6 col-md-6">
                    <WellheadM22Chart />
                </div>
            </div>
        </MasterLayout>
    )
}
export default ChartMudiPadA