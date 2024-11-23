import axios from "axios";

export const getAllProductAPI = async () => {
    try {
        const jwt_token = localStorage.getItem('jwt_token');

        if (jwt_token) {
            const response = await axios.get(
                'http://127.0.0.1:8000/api/get_all_product',
                {
                    headers: {
                        'Authorization' : `Bearer ${jwt_token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            if (response.status === 200) {
                return {
                    products: response.data.products || [], 
                    quantity_prd: response.data.quantity_prd || 0
                };
            }
        }

        return {
            products: [],
            quantity_prd: 0
        };

    }catch (error) {
        console.error('Lỗi: ', error);
        throw error;
    }
}


export const getAllRevenueAPI = async () => {
    try {
        const jwt_token = localStorage.getItem('jwt_token');

        if (jwt_token) {
            const response = await axios.get(
                'http://127.0.0.1:8000/api/get_all_revenue',
                {
                    headers: {
                        'Authorization' : `Bearer ${jwt_token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.status === 200) {        
                console.log('API Response:', response.data);        
                return {
                    revenues: response.data.revenues || [],
                };
            }
        }

        return {
            revenues: []
        };

    }catch (error) {
        console.error('Lỗi: ', error);
        throw error;
    }
}


export const getAllOrdersAPI = async () => {
    try {
        const jwt_token = localStorage.getItem('jwt_token');

        if (jwt_token) {
            const response = await axios.get(
                'http://127.0.0.1:8000/api/get_all_order',
                {
                    headers: {
                        'Authorization' : `Bearer ${jwt_token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            if (response.status === 200) {
                return {
                    orders: response.data.orders || []
                };
            }
        }

        return {
            orders: []
        };

    }catch (error) {
        console.error('Lỗi: ', error);
        throw error;
    }
}