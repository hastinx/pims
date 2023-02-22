import React, { useEffect, useState } from "react";
import PfdLarge from "../../../../../components/Faceplate/master-pfd-large";
import MasterLayout from "../../../../../components/Layout";
import Loader from "../../../../../utils/loader";


const PfdPadA = () => {
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
                    <div className="col-xl-12 col-md-12">
                        <PfdLarge
                            labelWellhead="WELLHEAD"
                            labelSeparator="TANK SEPARATOR"
                            labelSeparatorTag="PV-1150"
                            labelGauging="GAUGING"
                            labelGaugingTag="PV-6000"
                            labelPig="PIG LAUNCHER"
                            labelFlare="FLARE"
                            labelTo="TO CPA"
                        />
                    </div>
                </div>
            </MasterLayout>}
        </>

    )
}

export default PfdPadA

