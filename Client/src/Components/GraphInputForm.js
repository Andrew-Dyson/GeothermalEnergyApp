import React, { useState, useEffect } from 'react';
import './GraphInputForm.css'


const GraphInputForm = ({createGraph}) => {
    const [name, setName] = useState("")
    const [region, setRegion] = useState("")
    const [temperature, setTemperature] = useState("")
    const [depth, setDepth] = useState("")
    

    const handleSubmit = (ev) => {
        // ev.preventDefault();
        createGraph({
            name: name, 
            region: region,
            temperature: temperature,
            depth: depth
        })
        // setLocation("");
        // setElevation("")
        // setTemperature("");
        // setDepth("");
    }

    const handleNameChange = (ev) => {
        setName(ev.target.value)
    }
    const handleRegionChange = (ev) => {
        setRegion(ev.target.value)
    }
    const handleTempChange = (ev) => {
        setTemperature(ev.target.value)
    }
    const handleDepthChange = (ev) => {
        setDepth(ev.target.value)
    }

  return (
    <div>
      <form className="UserGraphInputs">
        <div className="InputItem">
        <label htmlFor="name">Location name:</label>
        <input  type="text" id="name" onChange={handleNameChange}/>
        </div>
        <div className="InputItem">
        <label htmlFor="elevation">Region:</label>
        <input  type="text" id="region" onChange={handleRegionChange}/>
        </div>
        <div className="InputItem">
        <label htmlFor="temperature">Temperature:</label>
        <input  type="text" id="temperature" onChange={handleTempChange}/>
        </div>
        <div className="InputItem">
        <label htmlFor="depth">Depth:</label>
        <input  type="text" id="depth" onChange={handleDepthChange}/>
        </div>
        <div className="InputItem">
        <input type="button" name="submit" value="Create Graph" onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  );
}

export default GraphInputForm;