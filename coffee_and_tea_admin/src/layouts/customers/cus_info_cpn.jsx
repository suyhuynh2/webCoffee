import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
export default function CusInfoCPN({
  isUnlockInput,
  fileInputRef,
  handleUploadClick,
  customer,
}) {
  return (
    <>
      <div className="-add-prd-form">
        <label className="value_box" htmlFor="">
          <p>ID khách hàng</p>
          <input type="text" value={customer.id} disabled />
        </label>

        <label className="value_box" htmlFor="">
          <p>Giới tính</p>
          <select value={customer.gender} name="" id="" disabled={!isUnlockInput}>
            <option value="0">Chưa cập nhật</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
        </label>

        <label className="value_box" htmlFor="">
          <p>Họ và tên</p>
          <input
            type="text"
            value={customer.cus_name}
            disabled={!isUnlockInput}
          />
        </label>

        <label className="value_box" htmlFor="">
          <p>Số điện thoại</p>
          <input type="phone" disabled={!isUnlockInput} value={customer.phone} />
        </label>

        <label className="value_box" htmlFor="">
          <p>Email</p>
          <input type="email" disabled={!isUnlockInput} value={customer.email} />
        </label>

        <label className="value_box" htmlFor="">
          <p>Ngày sinh</p>
          <input
            type="date"
            disabled={!isUnlockInput}
            value={customer.birth_date?.split("/").reverse().join("-") || ""}
            onChange={(e) => (customer.birth_date = e.target.value.split("-").reverse().join("/"))}
        />
        </label>

        <label className="value_box" htmlFor="">
          <p>Ngày đăng ký</p>
          <input
            type="date"
            disabled={!isUnlockInput}
            value={ new Date(customer.created_at).toISOString().split("T")[0]}
            onChange={(e) => {
                const [year, month, day] = e.target.value.split("-");
                customer.registration_date = `${day}/${month}/${year}`;
            }}
            />
            </label>


        <label className="value_box" htmlFor="">
          <p>Địa chỉ</p>
          <input type="text" disabled={!isUnlockInput} value={customer.address} />
        </label>

        <label className="value_box" htmlFor="">
          <p>Tổng chi tiêu</p>
          <input type="number" disabled={!isUnlockInput} value={customer.total_price} />
        </label>

        <label className="value_box" htmlFor="">
          <p>Trang thái</p>
          <select name="" id="" disabled={!isUnlockInput}>
            <option value="">Online</option>
            <option value="">Offline</option>
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
          />
          <div className="-upload-file" onClick={handleUploadClick}>
            <FontAwesomeIcon icon={faUpload} />
            <p>UPLOAD FILE</p>
          </div>
        </label>

        {isUnlockInput && <div className="-add-prd-btn">Cập nhật</div>}
      </div>
    </>
  );
}
