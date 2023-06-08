import React, { useState, useEffect } from 'react';
import Graph from '../Components/Graph';
import GraphInputForm from '../Components/GraphInputForm';
import GraphService from '../Services/GraphService';
import LocationList from '../Components/LocationList';

const GeoContainer = () => {
  const [plotImage, setPlotImage] = useState(null);
  // const [inputData, setInputData] = useState([]);
  const [locationData, setLocationData] = useState([]);

  // useEffect(() => {
  //   fetch('http://127.0.0.1:5000/graphdata')
  //     .then(res => res.json())
  //     .then(data => setPlotImage(data.image))
  // }, [plotImage]);

  useEffect(() => {
    getLocationData() 
  }, [])

  function getLocationData(){
    fetch('http://127.0.0.1:5000/data/locations')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setLocationData(data))
  }

  function createGraph(geoData) {
    GraphService.addGraph(geoData)
    .then(data => {
      console.log(data)
      // setPlotImage(data.image)
    })
    .then(data => console.log(data.image))
    }

    function createGraphWithLocation(geoData) {
      GraphService.addGraphWithLocation(geoData)
      .then(data => {
        console.log(data)
        // setPlotImage(data.image)
      })
      .then(data => console.log(data))
      }

  return (
    <div>
    <GraphInputForm createGraph={createGraph}/>
    <img src="Images/TestImage1.png" alt="" />
    <ul>
      <LocationList locationData={locationData} createGraphWithLocation={createGraphWithLocation}/>
    </ul>
    </div>
  );
}

export default GeoContainer;