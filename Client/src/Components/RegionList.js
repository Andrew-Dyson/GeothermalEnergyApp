import Graph from './Graph';
import RegionItem from './LocationItem';


const RegionList = ({locationData}) => {
    const locationItems = locationData.map(location => {
        return <LocationItem
        key={location.location_id}
        locationObject={location}
        ></LocationItem>
    });



    return(
        // <div>
        // <select onSelect={handleLocationSelect}>{locationItems}</select>
        // <form>
        // <input type="button" name="submit" value="Submit location" onClick={handleLocationSubmit}/>
        // </form>
        // </div>
    )
}

export default RegionList;