import React, { useState, useEffect } from 'react';


const ResourceCalcInput = ({calculateHeatInPlace}) => {
     const [thickness, setThickness] = useState(null);
     const [area, setArea] = useState(null);
     const [porosity, setPorosity] = useState(null);
     const [fluidSpecificDensity, setFluidSpecificDensity] = useState(null);
     const [rockSpecificDensity, setRockSpecificDensity] = useState(null);
     const [fluidSpecificHeatCapacity, setFluidSpecificHeatCapacity] = useState(null);
     const [rockSpecificHeatCapacity, setRockSpecificHeatCapacity] = useState(null);
     const [reservoirTemperature, setReservoirTemperature] = useState(null);
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

    const handleDemandChange = (ev) => {
        setDemand(ev.target.value)
    }

    const handleSubmit = (ev) => {
        calculateHeatInPlace({
            thickness: thickness, 
            area: area,
            porosity: porosity,
            fluid_specific_density: fluidSpecificDensity,
            rock_specific_density: rockSpecificDensity,
            fluid_specific_heat_capacity: fluidSpecificHeatCapacity,
            rock_specific_heat_capacity: rockSpecificHeatCapacity,
            reservoir_temperature: reservoirTemperature,
            demand: demand
        })
    }

    return(
        <>
        <form>
            <label htmlFor="thickness">Thickness:</label>
            <input  type="text" id="thickness" onChange={handleThicknessChange}/>
            <label htmlFor="area">Area:</label>
            <input  type="text" id="area" onChange={handleAreaChange}/>
            <label htmlFor="porosity">Porosity:</label>
            <input  type="text" id="porosity" onChange={handlePorosityChange}/>
            <label htmlFor="fluid_specific_density">Fluid specific density:</label>
            <input  type="text" id="fluid_specific_density" onChange={handleFlSpecDenChange}/>
            <label htmlFor="rock_specific_density">Rock specific density:</label>
            <input  type="text" id="rock_specific_density" onChange={handleRockSpecDenChange}/>
            <label htmlFor="fluid_specific_heat_capacity">Fluid specific heat capacity:</label>
            <input  type="text" id="fluid_specific_heat_capacity" onChange={handleFlSpecHeatCapChange}/>
            <label htmlFor="rock_specific_heat_capacity">Rock specific heat capacity:</label>
            <input  type="text" id="rock_specific_heat_capacity" onChange={handleRockSpecHeatCapChange}/>
            <label htmlFor="reservoir_temperature">Reservoir Temperature:</label>
            <input  type="text" id="reservoir_temperature" onChange={handleResTempChange}/>
            <label htmlFor="demand">Demand:</label>
            <input  type="text" id="demand" onChange={handleDemandChange}/>
            <input type="button" name="submit" value="Calculate" onClick={handleSubmit}/>
        </form>
        </>
    )

}

export default ResourceCalcInput;