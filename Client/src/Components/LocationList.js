import Graph from './Graph';
import LocationItem from './LocationItem';
import './LocationList.css'


const LocationList = ({locationData, createGraphWithLocation}) => {
    const locationItems = locationData.map(location => {
        return <LocationItem
        key={location.location_id}
        locationObject={location}
        ></LocationItem>
    });

const handleLocationSelect = (ev) => {
    console.log(ev.target.value)
    createGraphWithLocation({
        location_id: ev.target.value, 
    })

}

    return(
        <div>
        <select className="LocationDropdownItem" onChange={handleLocationSelect}>{locationItems}
        </select>
        </div>
    )
}

export default LocationList;