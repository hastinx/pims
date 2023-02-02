import React from "react";
import MasterLayout from "../../../../../components/Layout";
import WellheadM17Chart from "./wellhead_m17";
import WellheadM18Chart from "./wellhead_m18";
import WellheadM23Chart from "./wellhead_m23";
import WellheadM24Chart from "./wellhead_m24";
import WellheadM25Chart from "./wellhead_m25";
import WellheadM26Chart from "./wellhead_m26";

const ChartMudiPadB = () => {
    return (
        <MasterLayout>
            <div className="row mt-4">
                <div className="col-xl-6 col-md-6">
                    <WellheadM17Chart />
                </div>
                <div className="col-xl-6 col-md-6">
                    <WellheadM18Chart />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-6 col-md-6">
                    <WellheadM23Chart />
                </div>
                <div className="col-xl-6 col-md-6">
                    <WellheadM24Chart />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-6 col-md-6">
                    <WellheadM25Chart />
                </div>
                <div className="col-xl-6 col-md-6">
                    <WellheadM26Chart />
                </div>
            </div>
        </MasterLayout>
    )
}
export default ChartMudiPadB