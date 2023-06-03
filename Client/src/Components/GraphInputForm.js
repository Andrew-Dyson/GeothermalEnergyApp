import React, { useState, useEffect } from 'react';

const GraphInputForm = () => {
  
const submitData = () => {
    console.log("data submitted")
}

const changeData = () => {
    console.log("input change made")
}

  return (
    <div>
      <form onSubmit={submitData} method="POST">
        <label htmlFor="temperature">Temperature:</label>
        <input  type="text" id="temperature" onChange={changeData}/>
        <label htmlFor="depth">Depth:</label>
        <input  type="text" id="depth" onChange={changeData}/>
      </form>
    </div>
  );
}

export default GraphInputForm;