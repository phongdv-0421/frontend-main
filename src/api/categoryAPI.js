import axiosClient from "./axiosClient";


const categoryApi = {

    getAllCategory(params){
        const url = '/categories';
        return axiosClient.get(url, {params})
    },

    
    getCategoryByID(categoryID){
        const url = `/categories/${categoryID}`;
        return axiosClient.get(url)
    },
   
};
export default categoryApi;