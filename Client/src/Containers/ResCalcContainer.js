import React, { useState, useEffect } from 'react';
import ResourceCalcInput from '../Components/ResourceCalcInput';
import ResourceCalcOutput from '../Components/ResourceCalcOutput';


const ResCalcContainer = () => {
    const [heatInPlaceCalcResult, setHeatInPlaceCalcResult] = useState(null);
    const [recoverableHeatCalcResult, setRecoverableHeatCalcResult] = useState(null);
    const [energyDemand, setEnergyDemand] = useState(null);
    const [difference, setDifference] = useState(null);
    const [thickness, setThickness] = useState(null);
    const [area, setArea] = useState(null);
    const [porosity, setPorosity] = useState(null);
    const [fluidSpecificDensity, setFluidSpecificDensity] = useState(null);
    const [rockSpecificDensity, setRockSpecificDensity] = useState(null);
    const [fluidSpecificHeatCapacity, setFluidSpecificHeatCapacity] = useState(null);
    const [rockSpecificHeatCapacity, setRockSpecificHeatCapacity] = useState(null);
    const [reservoirTemperature, setReservoirTemperature] = useState(null);
    const [recoveryFactor, setRecoveryFactor] = useState(null);
    const [demand, setDemand] = useState(null);

    const handleThicknessChange = (ev) => {
        setThickness(ev.target.value)
    }

    const handleAreaChange = (ev) => {
        setArea(ev.target.value)
    }

    const handlePorosityChange = (ev) => {
        setPorosity(ev.target.value)
    }

    const handleFlSpecDenChange = (ev) => {
        setFluidSpecificDensity(ev.target.value)
    }

    const handleRockSpecDenChange = (ev) => {
        setRockSpecificDensity(ev.target.value)
    }

    const handleFlSpecHeatCapChange = (ev) => {
        setFluidSpecificHeatCapacity(ev.target.value)
    }

    const handleRockSpecHeatCapChange = (ev) => {
        setRockSpecificHeatCapacity(ev.target.value)
    }

    const handleResTempChange = (ev) => {
        setReservoirTemperature(ev.target.value)
    }

    const handleRecFacChange = (ev) => {
        setRecoveryFactor(ev.target.value)
    }

    const handleDemandChange = (ev) => {
        setDemand(ev.target.value)
    }

    useEffect(() => {
        calculateResources()
      }, [thickness])
    useEffect(() => {
        calculateResources()
      }, [area])
    useEffect(() => {
        calculateResources()
      }, [porosity])
    useEffect(() => {
        calculateResources()
      }, [fluidSpecificDensity])
    useEffect(() => {
        calculateResources()
      }, [rockSpecificDensity])
    useEffect(() => {
        calculateResources()
      }, [fluidSpecificHeatCapacity])
    useEffect(() => {
        calculateResources()
      }, [rockSpecificHeatCapacity])
    useEffect(() => {
        calculateResources()
      }, [reservoirTemperature])
    useEffect(() => {
        calculateResources()
      }, [recoveryFactor])

    useEffect(() => {
        calculateResources()
      }, [demand])

    const calculateResources = () => {
        let calc_heat_in_place = 0
        let calc_recoverable_heat = 0
        let calc_thickness = thickness
        let calc_area = area
        let calc_porosity = (porosity/100)
        let calc_fluidSpecificDensity = fluidSpecificDensity
        let calc_rockSpecificDensity = rockSpecificDensity
        let calc_fluidSpecificHeatCapacity = fluidSpecificHeatCapacity
        let calc_rockSpecificHeatCapacity = rockSpecificHeatCapacity
        let calc_reservoirTemperature = reservoirTemperature
        let calc_recoveryFactor = (recoveryFactor/100)

        let calc_demand = demand

        // thickness = variables_object.thickness
        // area = variables_object.area
        // porosity = (variables_object.porosity/100)
        // fluidSpecificDensity = variables_object.fluid_specific_density
        // rockSpecificDensity = variables_object.rock_specific_density
        // fluidSpecificHeatCapacity = variables_object.fluid_specific_heat_capacity
        // rockSpecificHeatCapacity = variables_object.rock_specific_heat_capacity
        // reservoirTemperature = variables_object.reservoir_temperature
        // recoveryFactor = variables_object.recoveryFactor
    
        // demand = variables_object.demand

        calc_heat_in_place = ((((calc_area*1000000)*calc_thickness)*(calc_porosity*calc_fluidSpecificDensity*calc_fluidSpecificHeatCapacity*(1-calc_porosity)*calc_rockSpecificDensity*calc_rockSpecificHeatCapacity)*calc_reservoirTemperature)/1000)/1000000
        const calc_heatInPlaceNoDecimal = Math.trunc(calc_heat_in_place) 
        calc_recoverable_heat = calc_heat_in_place*calc_recoveryFactor
        const calc_recoverableHeatNoDecimal = Math.trunc(calc_recoverable_heat)
        const calc_difference = calc_recoverableHeatNoDecimal - calc_demand
        const calc_differenceNoDecimal = Math.trunc(calc_difference)
        setHeatInPlaceCalcResult(calc_heatInPlaceNoDecimal)
        setRecoverableHeatCalcResult(calc_recoverableHeatNoDecimal)
        setEnergyDemand(calc_demand)
        setDifference(calc_differenceNoDecimal)
    }

    return(
        <div>
        <ResourceCalcInput 
        handleThicknessChange={handleThicknessChange} handleAreaChange={handleAreaChange} handlePorosityChange={handlePorosityChange} handleFlSpecDenChange={handleFlSpecDenChange} handleRockSpecDenChange={handleRockSpecDenChange} handleFlSpecHeatCapChange={handleFlSpecHeatCapChange} handleRockSpecHeatCapChange={handleRockSpecHeatCapChange} handleResTempChange={handleResTempChange} handleRecFacChange={handleRecFacChange} handleDemandChange={handleDemandChange}/>
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