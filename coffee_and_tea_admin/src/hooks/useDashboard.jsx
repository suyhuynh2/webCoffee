/* eslint-disable no-unused-vars */
import { getAllOrdersAPI, getAllRevenueAPI } from "../app/api/doashboardApi";
import { useEffect, useState } from "react";

const currentDate = new Date();

export const useDashboard = () => {
    const [ revenue, setRevenue ] = useState([]);
    const [ orders, setOrders ] = useState([])

    useEffect(() => {
        fetchRevenue(setRevenue);
        fetchOrders(setOrders);
    }, []);


    // sản phẩm + doanh thu đã bán tháng hiện tại và tháng trước đó
    const {
        quantity, quantityCurrentMonth, quantityPrevMonth,
        totalRevenue, revenueCurrentMonth, revenuePrevMonth
    } = calculatedRevenue(revenue);

    // đơn hàng trong tháng
    const { countFinish, orderQuantity } = countOrders(orders);

    console.log("revenueCurrentMonth: ", revenueCurrentMonth);
    console.log("revenuePrevMonth: ", revenuePrevMonth);
    

    return {
        quantity,
        quantityCurrentMonth,
        quantityPrevMonth,
        totalRevenue, 
        revenueCurrentMonth, 
        revenuePrevMonth,
        orderFinish: countFinish,
        orderQuantity
    }
}

// ====================================================================================================== //

const fetchRevenue = (setRevenue) => {
    getAllRevenueAPI().then(
        data => {
            setRevenue(data.revenues)
        }
    )
    .catch(err => {
        console.log("Error: ", err);
    })
}

const fetchOrders = (setOrders) => {
    getAllOrdersAPI().then(
        data => {
            setOrders(data.orders);
        }
    )
    .catch(err => {
        console.log("Error: ", err);
    })
}

// ======================================================================================================== //

const calculatedRevenue = (revenue) => {
    let quantity = 0;
    let quantityPrevMonth = 0;
    let quantityCurrentMonth = 0;
    let totalRevenue = 0;
    let revenueCurrentMonth = 0;
    let revenuePrevMonth = 0;
     
    revenue.forEach(e => {
        quantity += e.quantity;
        totalRevenue += e.total_revenue;
        
        const revenueRecorMonth = (new Date(e.created_at)).getMonth() + 1;
        const currentMonth = currentDate.getMonth() + 1;

        if (currentMonth === revenueRecorMonth) {
            quantityCurrentMonth++;
            revenueCurrentMonth += e.total_revenue;
        }

        if (currentMonth - 1 === revenueRecorMonth) {
            quantityPrevMonth++;
            revenuePrevMonth += e.total_revenue;
        }
    })
    return {
        quantity, 
        quantityPrevMonth,
        quantityCurrentMonth, 
        totalRevenue,
        revenueCurrentMonth,
        revenuePrevMonth
    };
}

const countOrders = (orders) => {
    let orderQuantity = 0;
    let countFinish = 0;
    orders.forEach(e => {
        const orderMonth = (new Date(e.created_at)).getMonth() + 1;
        const currentMonth = (new Date()).getMonth() + 1;

        if (orderMonth === currentMonth) {
            orderQuantity++;
            if (e.status === 0) countFinish++;
        }
    })
    return { countFinish, orderQuantity };
}