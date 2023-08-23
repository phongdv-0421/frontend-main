import axios from 'axios'
import queryString from 'query-string'
// process.env.REACT_APP_API_URL
 const axiosClient = axios.create({
    baseURL:'https://js-post-api.herokuapp.com/api/',
    
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
    // process.env.REACT_APP_API_URL_2
export const axiosClient2 = axios.create({
        baseURL: 'http://localhost:8000/api/',
        
        headers: {
            'content-type': 'application/json',
        },
        paramsSerializer: (params) => queryString.stringify(params),
    })
    
axiosClient2.interceptors.response.use((response) => {
        if(response && response.data) {
            return response.data;
        }
    })

export default axiosClient;
