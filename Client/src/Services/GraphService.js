

const GraphService = {
    // getGraph(){
    //     return fetch('http://127.0.0.1:5000/graphdata')
    //     .then(res => res.json())
    //     },

    addGraph(graphData){
        // console.log("create graph")
        // console.log(graphData)
        return fetch('http://127.0.0.1:5000//data/userdata', {
            method: 'POST',
            body: JSON.stringify(graphData),
            headers: {
            'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
    },

    addGraphWithLocation(graphData){
        return fetch('http://127.0.0.1:5000/data/locations/location', {
            method: 'POST',
            body: JSON.stringify(graphData),
            headers: {
            'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res.json()))
    },

    addGraphWithRegion(graphData){
        return fetch('http://127.0.0.1:5000/data/locations/region', {
            method: 'POST',
            body: JSON.stringify(graphData),
            headers: {
            'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res.json()))
    },

    addGraphWithLocationsByRegion(list_of_regions){
        return fetch('http://127.0.0.1:5000/data/locations/alllocationsbyregion', {
            method: 'POST',
            body: JSON.stringify(list_of_regions),
            headers: {
            'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res.json()))
    }
}
export default GraphService;