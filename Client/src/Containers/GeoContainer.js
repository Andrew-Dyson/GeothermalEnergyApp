import React, { useState, useEffect } from 'react';
import Graph from '../Components/Graph';
import GraphInputForm from '../Components/GraphInputForm';
import GraphService from '../Services/GraphService';

const GeoContainer = () => {
  const [plotImage, setPlotImage] = useState("");

  // useEffect(() => {
  //   fetchGraph()
  // }, []);

  // const fetchGraph = () => {
  //    setPlotImage(GraphService.getGraph()
  //    .then(data => setPlotImage(data.image)))
  // }

  const createGraph = (geoData) => {
    // console.log(geoData)
    GraphService.addGraph(geoData)
    .then(data => setPlotImage(data.image))

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