import axios from "axios";
export default axios.create({
    baseURL: "https://ucarenet-staging.azurewebsites.net",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials':true

      },

});