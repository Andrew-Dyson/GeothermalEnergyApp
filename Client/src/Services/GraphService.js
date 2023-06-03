const baseURL = 'http://localhost:5000/graphdata';

const GraphService = {
getGraph(){
    return fetch('http://127.0.0.1:5000/graphdata')
      .then(res => res.json())
    },

createGraph(graphData){

}

}
export default GraphService;