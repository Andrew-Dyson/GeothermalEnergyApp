import React, { useState, useEffect } from 'react';

const Graph = ({plotImage, data}) => {

    const createImagePath = (inputImage) => {
        const imagePath = "Images/" + inputImage
        return imagePath
    }

  return (
    <div>
      {/* <img src={createImagePath(plotImage)} alt="" /> */}
      
      {data}
    </div>
  );
}

export default Graph;