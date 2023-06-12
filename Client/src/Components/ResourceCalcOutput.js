import React, { useState, useEffect } from 'react';
import './ResourceCalcOutput.css'

const ResourceCalcOutput = ({heatInPlaceCalcResult, energyDemand, difference, recoverableHeatCalcResult}) => {



    return(
        <div className="UserCalcOutputs">
        <p className="CalcOutputItem"> Heat in place: {heatInPlaceCalcResult} kilojoules</p>
        <p className="CalcOutputItem"> Recoverable Heat: {recoverableHeatCalcResult} kilojoules</p>
        <p className="CalcOutputItem"> Energy demand: {energyDemand} kilojoules</p>
        <p className="CalcOutputItem"> Difference: {difference} kilojoules</p>
        </div>
    )


}

export default ResourceCalcOutput;