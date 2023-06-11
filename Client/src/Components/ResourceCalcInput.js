import React, { useState, useEffect } from 'react';
import './ResourceCalcInput.css'


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
        <form className="UserCalcInputs">
            <div className="CalcInputItem">
            <label htmlFor="thickness">Thickness:</label>
            <input  type="text" id="thickness" onChange={handleThicknessChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="area">Area:</label>
            <input  type="text" id="area" onChange={handleAreaChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="porosity">Porosity:</label>
            <input  type="text" id="porosity" onChange={handlePorosityChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="fluid_specific_density">Fluid specific density:</label>
            <input  type="text" id="fluid_specific_density" onChange={handleFlSpecDenChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="rock_specific_density">Rock specific density:</label>
            <input  type="text" id="rock_specific_density" onChange={handleRockSpecDenChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="fluid_specific_heat_capacity">Fluid specific heat capacity:</label>
            <input  type="text" id="fluid_specific_heat_capacity" onChange={handleFlSpecHeatCapChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="rock_specific_heat_capacity">Rock specific heat capacity:</label>
            <input  type="text" id="rock_specific_heat_capacity" onChange={handleRockSpecHeatCapChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="reservoir_temperature">Reservoir Temperature:</label>
            <input  type="text" id="reservoir_temperature" onChange={handleResTempChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="demand">Demand:</label>
            <input  type="text" id="demand" onChange={handleDemandChange}/>
            </div>
            <div className="CalcInputItem">
            <input type="button" name="submit" value="Calculate" onClick={handleSubmit}/>
            </div>
        </form>
        </>
    )

}

export default ResourceCalcInput;