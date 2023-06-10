import React, { useState, useEffect } from 'react';


const PlotByRegionButton = ({createGraphAllLocationsByRegion}) => {
    

    const handleSubmit = (ev) => {
        // ev.preventDefault();
        createGraphAllLocationsByRegion()
    }

    

  return (
    <div>
      <form>
        <input type="button" name="submit" value="Plot all locations by region" onClick={handleSubmit}/>
      </form>
    </div>
  );
}

export default PlotByRegionButton;