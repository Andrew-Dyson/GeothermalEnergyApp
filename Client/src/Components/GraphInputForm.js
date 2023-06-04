import React, { useState, useEffect } from 'react';


const GraphInputForm = ({createGraph}) => {
    const [temperature, setTemperature] = useState("")
    const [depth, setDepth] = useState("")

  
const HandleSubmit = (ev) => {
    ev.preventDefault();
    createGraph({
        temperature: ev.target.temperature.value,
        depth: ev.target.depth.value
    })
    setTemperature("");
    setDepth("");
}

const HandleTempChange = (ev) => {
    console.log(ev.target.value)
}
const HandleDepthChange = (ev) => {
    console.log(ev.target.value)
}

//     const handleSubmit = ev => {
//       ev.preventDefault();
//       addBooking({
//         name: name,
//         email: email,
//         checked_in: checkedIn
//       });
//       setName("");
//       setEmail("");
//       setCheckedIn(false);
//     }

  return (
    <div>
      <form onSubmit={HandleSubmit} method="POST">
        <label htmlFor="temperature">Temperature:</label>
        <input  type="text" id="temperature" onChange={HandleTempChange}/>
        <label htmlFor="depth">Depth:</label>
        <input  type="text" id="depth" onChange={HandleDepthChange}/>
        <input type="submit" name="submit" value="Create Graph" />
      </form>
    </div>
  );
}

export default GraphInputForm;