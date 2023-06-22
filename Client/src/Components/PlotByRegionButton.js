import React, { useState, useEffect } from 'react';
import './PlotByRegionButton.css'

const PlotByRegionButton = ({createGraphAllLocationsByRegion}) => {
    

    const handleSubmit = (ev) => {
        createGraphAllLocationsByRegion()
    }

    

  return (
    <div>
      <form>
        <input className="RegionsInputItem" type="button" name="submit" value="Plot all locations by region" onClick={handleSubmit}/>
      </form>
    </div>
  );
}

export default PlotByRegionButton;