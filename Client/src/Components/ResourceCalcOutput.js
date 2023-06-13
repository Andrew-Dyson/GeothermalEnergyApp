import React, { useState, useEffect } from 'react';
import './ResourceCalcOutput.css'

const ResourceCalcOutput = ({heatInPlaceCalcResult, energyDemand, difference, recoverableHeatCalcResult}) => {



    return(
        <div className="UserCalcOutputs">
        <p className="CalcOutputItem"> Heat in place: {heatInPlaceCalcResult} Gj</p>
        <p className="CalcOutputItem"> Recoverable Heat: {recoverableHeatCalcResult} Gj</p>
        <p className="CalcOutputItem"> Difference: {difference} Gj</p>
        </div>
    )


}

export default ResourceCalcOutput;