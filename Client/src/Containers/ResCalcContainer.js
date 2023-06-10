import React, { useState, useEffect } from 'react';
import ResourceCalcInput from '../Components/ResourceCalcInput';
import ResourceCalcOutput from '../Components/ResourceCalcOutput';


const ResCalcContainer = () => {
    const [heatInPlaceCalcResult, setHeatInPlaceCalcResult] = useState(null);
    const [energyDemand, setEnergyDemand] = useState(null);
    const [difference, setDifference] = useState(null);


    const calculateHeatInPlace = (variables_object) => {
        let result = 0
        let thickness = 0
        let area = 0
        let porosity = 0
        let fluidSpecificDensity = 0
        let rockSpecificDensity = 0
        let fluidSpecificHeatCapacity = 0
        let rockSpecificHeatCapacity = 0
        let reservoirTemperature = 0

        let demand = 0

        thickness = variables_object.thickness
        area = variables_object.area
        porosity = variables_object.porosity
        fluidSpecificDensity = variables_object.fluid_specific_density
        rockSpecificDensity = variables_object.rock_specific_density
        fluidSpecificHeatCapacity = variables_object.fluid_specific_heat_capacity
        rockSpecificHeatCapacity = variables_object.rock_specific_heat_capacity
        reservoirTemperature = variables_object.reservoir_temperature
    
        demand = variables_object.demand

        result = (((area*1000000)*thickness)*(porosity*fluidSpecificDensity*fluidSpecificHeatCapacity*(1-porosity)*rockSpecificDensity*rockSpecificHeatCapacity)*reservoirTemperature)/1000
        let difference = result - demand
        setHeatInPlaceCalcResult(result)
        setEnergyDemand(demand)
        setDifference(difference)
    }

    return(
        <div>
        <ResourceCalcInput 
        calculateHeatInPlace={calculateHeatInPlace}/>
        <ResourceCalcOutput 
        heatInPlaceCalcResult={heatInPlaceCalcResult}
        energyDemand={energyDemand}
        difference={difference}
        />
        </div>
    )

}

export default ResCalcContainer;