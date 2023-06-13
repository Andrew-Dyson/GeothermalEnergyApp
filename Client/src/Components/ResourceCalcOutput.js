import React, { useState, useEffect } from 'react';
import './ResourceCalcOutput.css'

const ResourceCalcOutput = ({heatInPlaceCalcResult, energyDemand, difference, recoverableHeatCalcResult}) => {



    return(
        <div className="UserCalcOutputs">
        <p className="CalcOutputItem"> Heat in place: {heatInPlaceCalcResult} kj</p>
        <p className="CalcOutputItem"> Recoverable Heat: {recoverableHeatCalcResult} kj</p>
        <p className="CalcOutputItem"> Difference: {difference} kj</p>
        </div>
    )


}

export default ResourceCalcOutput;