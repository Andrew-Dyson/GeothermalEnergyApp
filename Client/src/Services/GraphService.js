// const baseURL = 'http://localhost:5000/graphdata';

const GraphService = {
    // getGraph(){
    //     return fetch('http://127.0.0.1:5000/graphdata')
    //     .then(res => res.json())
    //     },

    addGraph(graphData){
        // console.log("create graph")
        // console.log(graphData)
        return fetch('http://127.0.0.1:5000/data', {
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
    }
}
export default GraphService;