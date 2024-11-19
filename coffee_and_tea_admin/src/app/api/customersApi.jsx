// api cho khách hàng
import axios from "axios";

export const getAllCus = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/get_all_cus");
    console.log("Customer Data:", response.data); 
    return response.data;
  } catch (error) {
    console.error("Error fetching customers: ", error);
    throw error;
  }
};
