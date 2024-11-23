/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxes, faShoppingCart, faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';

export default function OverviewDashboard(
    { 
        curRev, 
        prevRev 
    }
) {
    return(
        <>
            <div className="data-overview">
                <div className="data-box">
                    {/* theo tháng */}
                    <div className='data-box-top'>
                        <FontAwesomeIcon icon={ faBoxes } />
                        <div className="in4-box">
                            {/* tổng sp đã bán trong tháng */}
                            <p>Sản phẩm đã bán</p> 
                            <h3>{curRev}</h3>
                        </div>
                    </div>
                    <hr />
                    {/* so sánh vs sản phẩm đã bán được của tháng trước */}
                    <p className="sale-title">
                        <span style={{color: (curRev - prevRev) > 0 ? "green" : "red"}}>
                            {((curRev - prevRev) > 0) ? 
                                `+ ${(((curRev-prevRev)/prevRev)*100).toFixed(2)}% ` :
                                `${(((curRev-prevRev)/prevRev)*100).toFixed(2)}% `}
                        </span>
                        tháng trước
                    </p>
                </div>
                <div className="data-box">
                    <div className='data-box-top'>
                        <FontAwesomeIcon icon={faShoppingCart } />
                        <div className="in4-box">
                            <p>Tổng số đơn hàng</p>
                            <h3></h3>
                        </div>
                    </div>
                    <hr />
                    <p className="sale-title"><span style={{color: "green"}}>+55%</span> tuần trước</p>
                </div>
                <div className="data-box">
                    <div className='data-box-top'>
                        <FontAwesomeIcon icon={faDollarSign } />
                        <div className="in4-box">
                            <p>Doanh thu</p>
                            <h3>3020</h3>
                        </div>
                    </div>
                    <hr />
                    <p className="sale-title"><span style={{color: "green"}}>+55%</span> tuần trước</p>
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