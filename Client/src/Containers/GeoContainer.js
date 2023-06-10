import React, { useState, useEffect } from 'react';
import Graph from '../Components/Graph';
import GraphInputForm from '../Components/GraphInputForm';
import GraphService from '../Services/GraphService';
import LocationList from '../Components/LocationList';
import RegionList from '../Components/RegionList';
import GraphMenu from '../Components/GraphMenu';
import ResourceCalc from '../Components/ResourceCalc';

const GeoContainer = () => {
  const [plotImage, setPlotImage] = useState(null);
  // const [inputData, setInputData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [regions, setRegions] = useState([]);

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

  useEffect(() => {
    setRegions(getRegions())
  }, [])

  const getRegions = () => {
    const inputted_regions = [{
      name: "Caithness",
      region_id: 1
    }, 
    {
      name: "East_Grampians",
      region_id: 2
    }, 
    {
      name: "West_Midland_Valley",
      region_id: 3
    }, 
    {
      name: "East_Midland_Valley",
      region_id: 4
    },
    {
      name: "Dumfries_and_Galloway",
      region_id: 5
    }]
    // let location
    // for (location in locationData)
    // {
    //   let region
    //   let counter = 0
    //   for ( region in regions) {
    //     if (region === location.region)
    //     counter += 1
    //   }
    //   {regions.push(location.region)}
    // }
    return inputted_regions
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


  function createGraphAllLocationsByRegion() {
    let regions = []
    regions = getRegions()
  
    GraphService.addGraphWithLocationsByRegion(regions)
    .then(data => {
      console.log(data)
      // setPlotImage(data.image)
    })
    .then(data => console.log(data))
    }

  function createGraphWithRegion(geoData) {
    GraphService.addGraphWithRegion(geoData)
    .then(data => {
      console.log(data)
    })
    .then(data => console.log(data))
    }



  return (
    <div>
    <img src="Images/TestImage1.png" alt="" />
    <ul>
      <LocationList locationData={locationData} createGraphWithLocation={createGraphWithLocation}/>
    </ul>
    <ul>
      <RegionList regions={regions} createGraphWithRegion={createGraphWithRegion}/>
    </ul>
      <GraphMenu createGraphAllLocationsByRegion={createGraphAllLocationsByRegion}/>
      <GraphInputForm createGraph={createGraph}/>
      <ResourceCalc/>
    </div>
  );
}

export default GeoContainer;