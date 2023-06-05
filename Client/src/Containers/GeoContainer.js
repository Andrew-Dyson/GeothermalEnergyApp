import React, { useState, useEffect } from 'react';
import Graph from '../Components/Graph';
import GraphInputForm from '../Components/GraphInputForm';
import GraphService from '../Services/GraphService';

const GeoContainer = () => {
  const [plotImage, setPlotImage] = useState(null);

  // useEffect(() => {
  //   fetch('http://127.0.0.1:5000/graphdata')
  //     .then(res => res.json())
  //     .then(data => setPlotImage(data.image))
  // }, [plotImage]);

  function createGraph(geoData) {
    GraphService.addGraph(geoData)
    .then(data => {
      // console.log(data)
      setPlotImage(data.image)
    })
    // .then(data => console.log(data.image))
    }

  return (
    <div>
      <GraphInputForm createGraph={createGraph}/>
      <Graph plotImage={plotImage}/>
    </div>
  );
}

export default GeoContainer;