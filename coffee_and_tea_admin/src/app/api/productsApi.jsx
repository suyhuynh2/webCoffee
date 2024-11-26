import axios from "axios";
import { validUpdatePrd } from "../valid/prodValid";

export const getAllPrdAPI = async () => {
    try {
      const jwt_token = localStorage.getItem("jwt_token");
      if (jwt_token) {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get_all_prd",
          {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Product Data:", response.data);
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching products: ", error);
      throw error;
    }
  };

  export const deletePrdAPI = async (id) => {
    try {
      const jwt_token = localStorage.getItem("jwt_token");
      if (jwt_token) {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/delete_prd",
          {
            id
          },
          {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Delete Data:", response.data);
        return response.data;
      }
    } catch (error) {
      console.error("Error delete products: ", error);
      throw error;
    }
  };

  export const updatePrdAPI = async (id, name, category, description, price, quantity, image) => {
    try {
      const data = [id, name, category, description, price, quantity, image];
      if(validUpdatePrd(data)) {
        const jwt_token = localStorage.getItem("jwt_token");
        if (jwt_token) {
          console.log('data: ', data);
          const response = await axios.post("http://127.0.0.1:8000/api/update_prd", 
          {
            id, name, category, description, price, quantity, image
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
          
          console.log("Update Response:", response.data);
        }
      }
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  export const addPrdAPI = async (name, category, description, price, quantity, image) => {
    try {
      const data = [name, category, description, price, quantity, image];
      if(validUpdatePrd(data)) {
        const jwt_token = localStorage.getItem("jwt_token");
        if (jwt_token) {
          console.log('data: ', data);
          const response = await axios.post("http://127.0.0.1:8000/api/add_prd", 
          {
            name, category, description, price, quantity, image
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