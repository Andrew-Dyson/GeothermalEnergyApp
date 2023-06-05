import React, { useState, useEffect } from 'react';

const Graph = ({plotImage}) => {

    const createImagePath = (inputImage) => {
        const imagePath = "Images/" + inputImage
        return imagePath
    }

  return (
    <div>
      {/* <img src={createImagePath(plotImage)} alt="" /> */}
      <img src="Images/TestImage1.png" alt="" />
    </div>
  );
}

export default Graph;