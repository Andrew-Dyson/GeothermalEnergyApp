import Graph from './Graph';
import RegionItem from './RegionItem';
import './RegionList.css'

const RegionList = ({regions, createGraphWithRegion}) => {
    const regionItems = regions.map(region => {
        return <RegionItem
        key={region.region_id}
        regionObject={region}
        ></RegionItem>
    });

const handleRegionSelect = (ev) => {
    console.log(ev.target.value)
    createGraphWithRegion({
        Region_name: ev.target.value
    })
}

    return(
        <div>
        <select className="InputItem" onChange={handleRegionSelect}>{regionItems}</select>
        </div>
    )
}

export default RegionList;