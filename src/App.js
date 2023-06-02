import React, { useState, useEffect } from 'react';
// import Image from './TestImage.png';


function App() {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    fetch('http://127.0.0.1:5000/data')
    .then(res => res.json())
    .then(data => {
      // console.log(data.graph)
      setImageSrc(data.image);
    });
  }, []);

  // const changeImageSrc = () => {
  //   setImageSrc('new-image-src.jpg');
  // }

  return (
    <div>
      <p>Here is a test image.</p>
      <img src={imageSrc} alt="" />
    </div>
  );
}

export default App;