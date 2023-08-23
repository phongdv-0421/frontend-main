import axios from 'axios'
import queryString from 'query-string'

 const axiosClient = axios.create({
    baseURL: 'https://js-post-api.herokuapp.com/api/',
    
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
})

    axiosClient.interceptors.response.use((response) => {
        if(response && response.data) {
            return response.data;
        }
    })



export default axiosClient;
