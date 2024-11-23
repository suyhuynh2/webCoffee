/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxes, faShoppingCart, faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';

export default function OverviewDashboard(
    { 
        quantity,
        quantityCurrentMonth,
        quantityPrevMonth,
        totalRevenue, 
        revenueCurrentMonth, 
        revenuePrevMonth,
        orderFinish,
        orderQuantity
    }
) {
    const subQuantity = quantityCurrentMonth - quantityPrevMonth;
    const subRevenue = revenueCurrentMonth - revenuePrevMonth;
    return(
        <>
            <div className="data-overview">

                <div className="data-box">
                    <div className='data-box-top'>
                        <FontAwesomeIcon icon={ faBoxes } />
                        <div className="in4-box">
                            <p>Sản phẩm đã bán</p> 
                            <h3>{quantityCurrentMonth}</h3>
                        </div>
                    </div>
                    <hr />
                    <p className="sale-title">
                        <span style={{color: subQuantity > 0 ? "green" : "red"}}>
                            {(subQuantity > 0) ?
                                `+ ${(((subQuantity)/quantityPrevMonth)*100).toFixed(2)}% ` :
                                `${(((subQuantity)/quantityPrevMonth)*100).toFixed(2)}% `}
                        </span>
                        tháng trước
                    </p>
                </div>

                <div className="data-box">
                    <div className='data-box-top'>
                        <FontAwesomeIcon icon={faShoppingCart } />
                        <div className="in4-box">
                            <p>Tổng số đơn hàng</p>
                            <h3>{orderQuantity}</h3>
                        </div>
                    </div>
                    <hr />
                    <p className="sale-title">
                        <span style={{color: "green"}}>{orderFinish} </span>
                        đơn đã hoàn thành
                    </p>
                </div>

                <div className="data-box">
                    <div className='data-box-top'>
                        <FontAwesomeIcon icon={faDollarSign } />
                        <div className="in4-box">
                            <p>Doanh thu tháng</p>
                            <h3>{revenueCurrentMonth.toLocaleString('vi-VN')} VND</h3>
                        </div>
                    </div>
                    <hr />
                    <span style={{color: subRevenue > 0 ? "green" : "red"}}>
                        {(subRevenue > 0) ?
                            `+ ${(((subRevenue)/revenuePrevMonth)*100).toFixed(2)}% ` :
                            `${(((subRevenue)/revenuePrevMonth)*100).toFixed(2)}% `}
                    </span>
                </div>

                <div className="data-box">
                    <div className='data-box-top'>
                        <FontAwesomeIcon icon={faUser} />
                        <div className="in4-box">
                            <p>Tổng số khách hàng</p>
                            <h3>885</h3>
                        </div>
                    </div>
                    <hr />
                    <p className="sale-title">
                        <span style={{color: "green"}}>209</span> tài khoản đang online
                    </p>
                </div>
            </div>
        </>
    );
}