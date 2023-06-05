import React, { useState, useEffect } from 'react';


const GraphInputForm = ({createGraph}) => {
    const [name, setName] = useState("")
    const [elevation, setElevation] = useState("")
    const [temperature, setTemperature] = useState("")
    const [depth, setDepth] = useState("")
    

    const handleSubmit = (ev) => {
        // ev.preventDefault();
        createGraph({
            name: name, 
            elevation: elevation,
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
    const handleElevationChange = (ev) => {
        setElevation(ev.target.value)
    }
    const handleTempChange = (ev) => {
        setTemperature(ev.target.value)
    }
    const handleDepthChange = (ev) => {
        setDepth(ev.target.value)
    }

  return (
    <div>
      <form>
        <label htmlFor="name">Location name:</label>
        <input  type="text" id="name" onChange={handleNameChange}/>
        <label htmlFor="elevation">Elevation:</label>
        <input  type="text" id="elevation" onChange={handleElevationChange}/>
        <label htmlFor="temperature">Temperature:</label>
        <input  type="text" id="temperature" onChange={handleTempChange}/>
        <label htmlFor="depth">Depth:</label>
        <input  type="text" id="depth" onChange={handleDepthChange}/>
        <input type="button" name="submit" value="Create Graph" onClick={handleSubmit}/>
      </form>
    </div>
  );
}

export default GraphInputForm;