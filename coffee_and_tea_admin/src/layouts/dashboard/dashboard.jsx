/* eslint-disable no-unused-vars */
import OverviewDashboard from "./overview"
import ChartData from "./chartData"
import { useDashboard } from "../../hooks/useDashBoard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"

export default function Dashboard() {
    console.log("DASHBOARD: RENDER");
    
    const { curQuantityRevMth, prevQuantityRevMth } = useDashboard();

    return(
    <>
        <div className="wrap-dashboard">
            <div className="title_box">
                <FontAwesomeIcon icon={faHome} />
                <h2 className="dashboard-title">Trang chủ</h2>
            </div>

            <OverviewDashboard
                curRev={curQuantityRevMth}
                prevRev={prevQuantityRevMth}
            />
            
            <ChartData/>
        </div>
    </>
    )
}