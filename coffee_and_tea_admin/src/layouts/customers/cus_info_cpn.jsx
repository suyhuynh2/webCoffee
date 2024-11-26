import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { updateCusAPI } from "../../app/api/customersApi";

/* eslint-disable react/prop-types */
export default function CusInfoCPN({
  isUnlockInput,
  fileInputRef,
  handleUploadClick,
  customer,
  setCustomerImage,
}) {
  const [editableCustomer, setEditableCustomer] = useState(
    customer || { image: "" }
  );

  useEffect(() => {
    setEditableCustomer(customer);
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const filePath = file.name;
      setCustomerImage(URL.createObjectURL(file));
      setEditableCustomer((prev) => ({
        ...prev,
        image: filePath,
      }));
      console.log("Updated editableCustomer.image:", filePath);
    }
  };

  const handleUpdateCus = () => {
    updateCusAPI(
      editableCustomer.id,
      editableCustomer.cus_name,
      editableCustomer.gender,
      editableCustomer.phone,
      editableCustomer.email,
      editableCustomer.birth_date,
      editableCustomer.created_at,
      editableCustomer.address,
      editableCustomer.balance,
      editableCustomer.status,
      editableCustomer.image
    );
  };

  return (
    <>
      <div className="-add-prd-form">
        <label className="value_box" htmlFor="">
          <p>ID khách hàng</p>
          <input type="text" value={customer?.id || ""} disabled />
        </label>

        <label className="value_box" htmlFor="">
          <p>Họ và tên</p>
          <input
            type="text"
            name="cus_name"
            value={editableCustomer?.cus_name || ""}
            disabled={!isUnlockInput}
            onChange={handleChange}
          />
        </label>

        <label className="value_box" htmlFor="">
          <p>Giới tính</p>
          <select
            name="gender"
            value={editableCustomer.gender || ""}
            disabled={!isUnlockInput}
            onChange={handleChange}
          >
            <option value="">Chọn giới tính</option>
            <option value="1">Nam</option>
            <option value="0">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
        </label>

        <label className="value_box" htmlFor="">
          <p>Số điện thoại</p>
          <input
            type="phone"
            name="phone"
            value={editableCustomer.phone}
            disabled={!isUnlockInput}
            onChange={handleChange}
          />
        </label>

        <label className="value_box" htmlFor="">
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={editableCustomer.email}
            disabled={!isUnlockInput}
            onChange={handleChange}
          />
        </label>

        <label className="value_box" htmlFor="">
          <p>Ngày sinh</p>
          <input
            type="date"
            name="birth_date"
            value={
              editableCustomer.birth_date?.split("/").reverse().join("-") || ""
            }
            disabled={!isUnlockInput}
            onChange={handleChange}
          />
        </label>

        <label className="value_box" htmlFor="">
          <p>Ngày đăng ký</p>
          <input
            type="date"
            name="registration_date"
            value={
              editableCustomer.registration_date
                ? editableCustomer.registration_date
                    .split("/")
                    .reverse()
                    .join("-")
                : editableCustomer.created_at
                ? new Date(editableCustomer.created_at)
                    .toISOString()
                    .split("T")[0]
                : ""
            }
            disabled={!isUnlockInput}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "registration_date",
                  value: e.target.value.split("-").reverse().join("/"),
                },
              })
            }
          />
        </label>

        <label className="value_box" htmlFor="">
          <p>Địa chỉ</p>
          <input
            type="text"
            name="address"
            disabled={!isUnlockInput}
            value={editableCustomer.address || ""}
            onChange={handleChange}
          />
        </label>

        <label className="value_box">
          <p>Tổng chi tiêu</p>
          <input
            type="text"
            name="total_price"
            value={new Intl.NumberFormat("vi-VN", {
              maximumFractionDigits: 0,
            }).format(editableCustomer.balance || 0)}
            disabled={!isUnlockInput}
            onChange={(e) =>
              setEditableCustomer((prev) => ({
                ...prev,
                balance: parseInt(e.target.value.replace(/\D/g, "")) || 0,
              }))
            }
          />
        </label>

        <label className="value_box" htmlFor="">
          <p>Trạng thái</p>
          <select
            name="status"
            value={editableCustomer.status || ""}
            disabled={!isUnlockInput}
            onChange={handleChange}
          >
            <option value="1">Hoạt động</option>
            <option value="0">Không hoạt động</option>
          </select>
        </label>

        <label htmlFor="" className="value_box">
          <p>Hình ảnh</p>
          <input
            type="file"
            name=""
            id=""
            ref={fileInputRef}
            disabled={!isUnlockInput}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <div className="-upload-file" onClick={handleUploadClick}>
            <FontAwesomeIcon icon={faUpload} />
            <p>UPLOAD FILE</p>
            <p>{editableCustomer.image}</p>
          </div>
        </label>

        {isUnlockInput && (
          <div className="-add-prd-btn" onClick={handleUpdateCus}>
            Cập nhật
          </div>
        )}
      </div>
    </>
  );
}
