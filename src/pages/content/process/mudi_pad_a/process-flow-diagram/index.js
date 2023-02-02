import React from "react";
import PfdLarge from "../../../../../components/Faceplate/master-pfd-large";
import MasterLayout from "../../../../../components/Layout";


const PfdPadA = () => {
    return (
        <MasterLayout>
            <div className="row mt-4">
                <div className="col-xl-12 col-md-12">
                    <PfdLarge
                        labelWellhead="WELLHEAD"
                        labelSeparator="TANK SEPARATOR"
                        labelGauging="GAUGING"
                        labelPig="PIG LAUNCHER"
                        labelFlare="FLARE"
                        labelTo="TO CPA"
                    />
                </div>
            </div>
        </MasterLayout>
    )
}

export default PfdPadA

