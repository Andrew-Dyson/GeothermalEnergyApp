import React, { useState, useEffect } from 'react';
import './GraphInputForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'



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
        <div className="UserInputslabel">
        <p>Input Data</p>
        <FontAwesomeIcon icon={faCircleArrowDown } size="xl" className="DownArrow"/>
        </div>
      <form className="UserGraphInputs">
        <div className="InputItem">
        <label htmlFor="name">Location</label>
        <input className="InputField" type="text" id="name" onChange={handleNameChange}/>
        </div>
        <div className="InputItem">
        <label htmlFor="elevation">Region</label>
        <input className="InputField" type="text" id="region" onChange={handleRegionChange}/>
        </div>
        <div className="InputItem">
        <label htmlFor="temperature" >Temperature</label>
        <input className="InputField" type="text" id="temperature" onChange={handleTempChange}/>
        </div>
        <div className="InputItem">
        <label htmlFor="depth">Depth</label>
        <input className="InputField" type="text" id="depth" onChange={handleDepthChange}/>
        </div>
        <div >
        <input className="UserInputButton" type="button" name="submit" value="Create Graph" onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  );
}

export default GraphInputForm;