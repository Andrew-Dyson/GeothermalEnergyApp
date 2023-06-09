import React, { useState, useEffect } from 'react';


const LocationItem = ({locationObject}) => {

    if (!locationObject) return null

  return (
    <>
    <option value={locationObject.location_id}> {locationObject.location_name} </option>
    </>
  );
}

export default LocationItem;