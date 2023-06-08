import React, { useState, useEffect } from 'react';

const LocationItem = ({locationObject}) => {



  return (
    <>
    <option value={locationObject.location_id}> {locationObject.location_name} </option>
    </>
  );
}

export default LocationItem;