// api cho khách hàng
import axios from "axios";
import { validUpdateCus } from "../valid/cusValid";

export const getAllCusAPI = async () => {
  try {
    const jwt_token = localStorage.getItem("jwt_token");
    if (jwt_token) {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/get_all_cus",
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Customer Data:", response.data);
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching customers: ", error);
    throw error;
  }
};

export const updateCusAPI = async (id, cus_name, gender, phone, email, birth_date, created_at, address, balance, status, image ) => {
  try {
    const data = [id, cus_name, gender, phone, email, birth_date, created_at, address, balance, status, image ];
    if(validUpdateCus(data)) {
      const jwt_token = localStorage.getItem("jwt_token");
      if (jwt_token) {
        console.log('data: ', data);
        const response = await axios.post("http://127.0.0.1:8000/api/update_cus", 
        {
          id,
          cus_name,
          gender,
          phone,
          email,
          birth_date,
          created_at,
          address,
          balance,
          status,
          image,
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

export const getAllHisAPI = async () => {
  try {
    const jwt_token = localStorage.getItem("jwt_token");
    if (jwt_token) {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/get_all_his",
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("History Data:", response.data);
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching history: ", error);
    throw error;
  }
};
