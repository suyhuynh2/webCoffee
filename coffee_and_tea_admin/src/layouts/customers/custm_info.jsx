/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import {
  faBackwardStep,
  faGear,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CusInfoCPN from "./cus_info_cpn";
import OrderHisotry from "./order_history";

export default function CustomerInfo({ isOpen, isBackPrdList, customer }) {
  const fileInputRef = useRef(null);
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const [isUnlockInput, setUnlockInput] = useState(false);
  const handleUnlockInput = () => {
    setUnlockInput((prev) => !prev);
  };

  const [isShowHistoryPage, setShowHistoryPage] = useState(false);
  const handleShowHP = () => {
    setShowHistoryPage((prev) => !prev);
  };

  return (
    <>
      <div
        className="wrap-add-prd"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <div
          className="wrap-add-prd"
          style={{ display: !isShowHistoryPage ? "flex" : "none" }}
        >
          <div className="wrap-lef-add-prd">
            <div className="wrap-header-command">
              <h3>Chi tiết khách hàng</h3>
              <div className="gr-btn">
                <div className="-left-back-prd-list" onClick={handleShowHP}>
                  <FontAwesomeIcon icon={faHistory} />
                  Lịch sử
                </div>
                <div
                  className="-left-back-prd-list"
                  onClick={handleUnlockInput}
                >
                  <FontAwesomeIcon icon={faGear} />
                  Chỉnh sửa
                </div>
                <div className="-left-back-prd-list" onClick={isBackPrdList}>
                  <FontAwesomeIcon icon={faBackwardStep} />
                  Trở về
                </div>
              </div>
            </div>

            <CusInfoCPN
              fileInputRef={fileInputRef}
              handleUploadClick={handleUploadClick}
              isUnlockInput={isUnlockInput}
              customer={customer}
            />
          </div>

          <div className="wrap-right-add-prd">
            <h3>Avatar</h3>
            <img src="/public/logo-black.png" alt="" />
          </div>
        </div>

        <OrderHisotry isShowHistoryPage={isShowHistoryPage} />
      </div>
    </>
  );
}
