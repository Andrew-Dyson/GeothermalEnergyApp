import Graph from '../Components/Graph';


const GraphList = ({plotImage, inputData}) => {
    const data = inputData.map(depth => {
        return <li 
        key={depth.depth_id}
        depth={depth}
        >{depth.depth_value}</li>
    });



    return(
        <div>
        <ul>{data}</ul>
        </div>
    )
}

export default GraphList;