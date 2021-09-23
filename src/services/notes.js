import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl,newObject)
}
//function that takes id and the created object by the function above 
//makes a put request to the base Url modifying the object in the server
const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

//makes the above methods available for import 
//the exported object returns all the axisos promises 
export default {
    getAll: getAll,
    create: create,
    update: update
}

