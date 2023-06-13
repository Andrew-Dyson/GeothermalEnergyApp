import React, { useState, useEffect } from 'react';
import ResourceCalcInput from '../Components/ResourceCalcInput';
import ResourceCalcOutput from '../Components/ResourceCalcOutput';




const ResCalcContainer = () => {
    const [heatInPlaceCalcResult, setHeatInPlaceCalcResult] = useState(null);
    const [recoverableHeatCalcResult, setRecoverableHeatCalcResult] = useState(null);
    const [energyDemand, setEnergyDemand] = useState(null);
    const [difference, setDifference] = useState(null);


    const calculateResources = (variables_object) => {
        let heat_in_place = 0
        let recoverable_heat = 0
        let thickness = 0
        let area = 0
        let porosity = 0
        let fluidSpecificDensity = 0
        let rockSpecificDensity = 0
        let fluidSpecificHeatCapacity = 0
        let rockSpecificHeatCapacity = 0
        let reservoirTemperature = 0
        let recoveryFactor = 0

        let demand = 0

        thickness = variables_object.thickness
        area = variables_object.area
        porosity = (variables_object.porosity/100)
        fluidSpecificDensity = variables_object.fluid_specific_density
        rockSpecificDensity = variables_object.rock_specific_density
        fluidSpecificHeatCapacity = variables_object.fluid_specific_heat_capacity
        rockSpecificHeatCapacity = variables_object.rock_specific_heat_capacity
        reservoirTemperature = variables_object.reservoir_temperature
        recoveryFactor = variables_object.recoveryFactor
    
        demand = variables_object.demand

        heat_in_place = ((((area*1000000)*thickness)*(porosity*fluidSpecificDensity*fluidSpecificHeatCapacity*(1-porosity)*rockSpecificDensity*rockSpecificHeatCapacity)*reservoirTemperature)/1000)/1000000
        const heatInPlaceNoDecimal = Math.trunc(heat_in_place) 
        recoverable_heat = heat_in_place*recoveryFactor
        const recoverableHeatNoDecimal = Math.trunc(recoverable_heat)
        const difference = recoverableHeatNoDecimal - demand
        const differenceNoDecimal = Math.trunc(difference)
        setHeatInPlaceCalcResult(heatInPlaceNoDecimal)
        setRecoverableHeatCalcResult(recoverableHeatNoDecimal)
        setEnergyDemand(demand)
        setDifference(differenceNoDecimal)
    }

    return(
        <div>
        <ResourceCalcInput 
        calculateResources={calculateResources}/>
        <ResourceCalcOutput 
        heatInPlaceCalcResult={heatInPlaceCalcResult}
        recoverableHeatCalcResult={recoverableHeatCalcResult}
        energyDemand={energyDemand}
        difference={difference}
        />
        </div>
    )

}

export default ResCalcContainer;