import axios from 'axios';
import { validUpdatePrd } from "../valid/prodValid";

export const getAllCtgAPI = async () => {
    try {
      const jwt_token = localStorage.getItem("jwt_token");
      if (jwt_token) {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get_all_ctg",
          {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Category Data:", response.data);
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching category: ", error);
      throw error;
    }
  };

  export const addCtgAPI = async (category) => {
    try {
      const data = [category];
      if(validUpdatePrd(data)) {
        const jwt_token = localStorage.getItem("jwt_token");
        if (jwt_token) {
          console.log('data: ', data);
          const response = await axios.post("http://127.0.0.1:8000/api/add_ctg", 
          {
            category
          },
            {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
              "Content-Type": "application/json",
            },
          });
    
          if (response.status === 200) {
            alert(response.data.message)
          }
          
          console.log("Add Response:", response.data);
        }
      }
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };