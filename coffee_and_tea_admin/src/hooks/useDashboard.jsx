/* eslint-disable no-unused-vars */
import { all } from "axios";
import { getAllProductAPI, getAllRevenueAPI } from "../app/api/doashboardApi";
import { useEffect, useState } from "react";

export const useDashboard = () => {
    const [ revenue, setRevenue ] = useState([]);
    const [ currentRevenue, setCurrentRevenue ] = useState([]);
    const [ prevRevenue, setPrevRevenue ] = useState([]);
    const [ orders, setOrders ] = useState([])

    useEffect(() => {
        fetchRevenue(setCurrentRevenue, setPrevRevenue, setRevenue);
        fetchOrders(setOrders);
    }, []);

    const curQuantityRevMth = calQuantityRevMonth(currentRevenue);
    const prevQuantityRevMth = calQuantityRevMonth(prevRevenue);

    return { 
        curQuantityRevMth ,
        prevQuantityRevMth
    }
}

// ====================================================================================================== //
const fetchProducts = (setQuantityPrds) => {
    getAllProductAPI().then(
        data => {
            setQuantityPrds(data.quantity_prd);
        }
    )
    .catch(err => {
        console.log("Error: ", err);
    })
}

const fetchRevenue = (setCurrentRevenue, setPrevRevenue, setRevenue) => {
    getAllRevenueAPI().then(
        data => {
            const revenues = data.revenues;
            console.log("revenues: ", revenues);

            // lấy time hiện tại
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1;
            const prevMonth = currentMonth - 1;

            // chia 3 mảng
            const allRevenue = [];
            const currentRev = [];
            const prevRev = [];

            // foreach để lấy dữ liệu
            revenues.forEach(revenue => {
                const revenueMonth = (new Date(revenue.date)).getMonth() + 1;
                allRevenue.push(revenue);
                if (revenueMonth === currentMonth) currentRev.push(revenue);
                if (revenueMonth === prevMonth) prevRev.push(revenue);
            });

            // cập nhật giá trị cho useState
            setRevenue(allRevenue);
            setCurrentRevenue(currentRev);
            setPrevRevenue(prevRev);
        }
    )
    .catch(err => {
        console.log("Error: ", err);
    })
}

const fetchOrders = (setOrders) => {
    getAllProductAPI().then(
        data => {
            setOrders(data.quantity_prd);
        }
    )
    .catch(err => {
        console.log("Error: ", err);
    })
}

// ======================================================================================================== //

const calQuantityRevMonth = (revenue) => {
    let quantity = 0;
    revenue.forEach(e => {
        quantity += parseInt(e.quantity);
    })
    return quantity;
}