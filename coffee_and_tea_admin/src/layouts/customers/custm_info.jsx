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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomerImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [customerImage, setCustomerImage] = useState(
    customer?.image || "default-avatar-url.jpg"
  );

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
              setCustomerImage={setCustomerImage}
            />
          </div>

          <div className="wrap-right-add-prd">
            <h3>Avatar</h3>
            <div className="avatar-container">
              <img src={customerImage} alt="Avatar" className="avatar-image" />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </div>

        <OrderHisotry isShowHistoryPage={isShowHistoryPage} />
      </div>
    </>
  );
}
