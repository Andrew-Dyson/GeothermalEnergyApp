import React, { useState, useEffect } from 'react';
// import Graph from '../Components/Graph';
import GraphInputForm from '../Components/GraphInputForm';
import GraphService from '../Services/GraphService';
import LocationList from '../Components/LocationList';
import RegionList from '../Components/RegionList';
import PlotByRegionButton from '../Components/PlotByRegionButton';
import './GraphContainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'

const GraphContainer = () => {
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
  }, [locationData])

  const getRegions = () => {
    // Hard coded inputs
    // const inputted_regions = [{
    //   name: "Caithness, Scotland",
    //   region_id: 1
    // }, 
    // {
    //   name: "East Grampians, Scotland",
    //   region_id: 2
    // }, 
    // {
    //   name: "Western Central Belt, Scotland",
    //   region_id: 3
    // }, 
    // {
    //   name: "Eastern Central Belt, Scotland",
    //   region_id: 4
    // },
    // {
    //   name: "Dumfries and Galloway, Scotland",
    //   region_id: 5
    // }]

    var locations = locationData
    var regions_counter = []
    var regions_unique = []
    for( let i = 0; i < locations.length; i++ ){
    if( !regions_counter[locations[i].region]){
    regions_unique.push({
      name: locations[i].region,
      region_id: i
    })
    regions_counter[locations[i].region] = 1
  }
}
  // console.log(regions_unique)
  return regions_unique
    // return inputted_regions
  }

  function createGraph(geoData) {
    GraphService.addGraph(geoData)
    .then(data => {
      console.log(data)
      // setPlotImage(data.image)
    })
    // .then(data => console.log(data.image))
    .then(data => console.log("image generated"))
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
    
      <div className="UserInputsAndGraph">
          
          <GraphInputForm createGraph={createGraph}/>
          <div className="GraphParent">
          <img className="GraphImage" src="Images/TestImage1.png" alt="Graph showing temperature vs depth data points" />
          </div>
      </div>
      <div className="FilterLabelAndInputs">
          <div className="FilterDatalabel">
              <p>Filter data</p>
              <FontAwesomeIcon icon={faCircleArrowDown } size="xl" className="DownArrow"/>
          </div>
          <div className="SelectInputs">
              <ul className="LocationList">
                <LocationList locationData={locationData} createGraphWithLocation={createGraphWithLocation}/>
              </ul>
              <ul className="RegionList">
                <RegionList regions={regions} createGraphWithRegion={createGraphWithRegion}/>
              </ul>
                <PlotByRegionButton createGraphAllLocationsByRegion={createGraphAllLocationsByRegion}/>
          </div>
      </div>
    </div>
  );
}

export default GraphContainer;  