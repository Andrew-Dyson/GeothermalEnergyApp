import React from 'react';

const RegionItem = ({regionObject}) => {
    

if (!regionObject) return null

  return (
    <>
    <option value={regionObject.name}> {regionObject.name} </option>
    </>
  );
}

export default RegionItem;