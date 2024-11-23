/* eslint-disable no-unused-vars */
import OverviewDashboard from "./overview"
import ChartData from "./chartData"
import { useDashboard } from "../../hooks/useDashBoard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"

export default function Dashboard() {
    console.log("DASHBOARD: RENDER");
    
    const {
        orderFinish, orderQuantity, 
        quantity, quantityCurrentMonth, quantityPrevMonth,
        revenueCurrentMonth, revenuePrevMonth, totalRevenue
    } = useDashboard();

    return(
    <>
        <div className="wrap-dashboard">
            <div className="title_box">
                <FontAwesomeIcon icon={faHome} />
                <h2 className="dashboard-title">Trang chủ</h2>
            </div>

            <OverviewDashboard
                orderFinish={orderFinish}
                orderQuantity={orderQuantity}
                quantity={quantity}
                quantityCurrentMonth={quantityCurrentMonth}
                quantityPrevMonth={quantityPrevMonth}
                totalRevenue={totalRevenue}
                revenueCurrentMonth={revenueCurrentMonth}
                revenuePrevMonth={revenuePrevMonth}
            />
            
            <ChartData/>
        </div>
    </>
    )
}