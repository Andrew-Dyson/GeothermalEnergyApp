import React, { useState, useEffect } from 'react';
import Graph from '../Components/Graph';
import GraphInputForm from '../Components/GraphInputForm';
import GraphService from '../Services/GraphService';
import GraphList from '../Components/GraphList';

const GeoContainer = () => {
  const [plotImage, setPlotImage] = useState(null);
  const [inputData, setInputData] = useState([]);

  // useEffect(() => {
  //   fetch('http://127.0.0.1:5000/graphdata')
  //     .then(res => res.json())
  //     .then(data => setPlotImage(data.image))
  // }, [plotImage]);

  useEffect(() => {
    getData() 
  }, [])

  function getData(){
    fetch('http://127.0.0.1:5000/graphdata')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setInputData(data))
  }

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
    <img src="Images/TestImage1.png" alt="" />
    <ul>
      <GraphList inputData={inputData} plotImage={plotImage}/>
    </ul>
    </div>
  );
}

export default GeoContainer;