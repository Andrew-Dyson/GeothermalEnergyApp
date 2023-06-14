import React, { useState, useEffect } from 'react';
import './ResourceCalcInput.css'


const ResourceCalcInput = ({handleThicknessChange, handleAreaChange, handlePorosityChange, handleFlSpecDenChange, handleRockSpecDenChange, handleFlSpecHeatCapChange, handleRockSpecHeatCapChange, handleResTempChange, handleRecFacChange, handleDemandChange}) => {
     



    // const handleSubmit = (ev) => {
    //     calculateResources({
    //         thickness: thickness, 
    //         area: area,
    //         porosity: porosity,
    //         fluid_specific_density: fluidSpecificDensity,
    //         rock_specific_density: rockSpecificDensity,
    //         fluid_specific_heat_capacity: fluidSpecificHeatCapacity,
    //         rock_specific_heat_capacity: rockSpecificHeatCapacity,
    //         reservoir_temperature: reservoirTemperature,
    //         demand: demand,
    //         recoveryFactor: recoveryFactor

    //     })
    // }

    return(
        <>
        <form className="UserCalcInputs">
        <div className="CalcInputTypes">
        <div>
            <div className="CalcInputItem">
            <label htmlFor="thickness">Thickness (m) </label>
            <input className="CalcInputField" type="text" id="thickness" onChange={handleThicknessChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="area">Area (km<sup>2</sup>) </label>
            <input className="CalcInputField" type="text" id="area" onChange={handleAreaChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="porosity">Porosity (%) </label>
            <input className="CalcInputField" type="text" id="porosity" onChange={handlePorosityChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="rock_specific_density">Rock density (kg/m<sup>3</sup>) </label>
            <input className="CalcInputField" type="text" id="rock_specific_density" onChange={handleRockSpecDenChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="rock_specific_heat_capacity">Rock heat capacity (kg/m<sup>3</sup>) </label>
            <input className="CalcInputField" type="text" id="rock_specific_heat_capacity" onChange={handleRockSpecHeatCapChange}/>
            </div>
        </div>
        <div>
            <div className="CalcInputItem">
            <label htmlFor="fluid_specific_density">Fluid density (kg/m<sup>3</sup>) </label>
            <input className="CalcInputField" type="text" id="fluid_specific_density" onChange={handleFlSpecDenChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="fluid_specific_heat_capacity">Fluid heat capacity (kg/m<sup>3</sup>) </label>
            <input className="CalcInputField" type="text" id="fluid_specific_heat_capacity" onChange={handleFlSpecHeatCapChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="reservoir_temperature">Temperature (<sup>o</sup>C) </label>
            <input className="CalcInputField" type="text" id="reservoir_temperature" onChange={handleResTempChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="recovery_factor">Recovery factor (%) </label>
            <input className="CalcInputField" type="text" id="recovery_factor" onChange={handleRecFacChange}/>
            </div>
            <div className="CalcInputItem">
            <label htmlFor="demand">Demand (gigajoules) </label>
            <input className="CalcInputField" type="text" id="demand" onChange={handleDemandChange}/>
            </div>
        </div>
        </div>
            {/* <div>
                <input className="CalcInputButton" type="button" name="submit" value="Calculate" onClick={handleSubmit}/>
            </div> */}
        </form>
        </>
    )

}

export default ResourceCalcInput;