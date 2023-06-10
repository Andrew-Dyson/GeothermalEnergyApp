import React, { useState, useEffect } from 'react';

const ResourceCalcOutput = ({heatInPlaceCalcResult, energyDemand, difference}) => {



    return(
        <>
        <p>{heatInPlaceCalcResult}</p>
        <p>{energyDemand}</p>
        <p>{difference}</p>
        </>
    )


}

export default ResourceCalcOutput;