// const baseURL = 'http://localhost:5000/graphdata';

const GraphService = {
    getGraph(){
        return fetch('http://127.0.0.1:5000/graphdata')
        .then(res => res.json())
        },

    addGraph(graphData){
        // console.log("create graph")
        return fetch('http://127.0.0.1:5000/graphdata', {
            method: 'POST',
            body: JSON.stringify(graphData),
            headers: {
            'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());

    }

}
export default GraphService;