/* eslint-disable react/prop-types */

export default function AdminInfo({isdisabled, handleUpadte}) {
    return(
    <>
        <label htmlFor="" className="value_admin_box">
            <p>Mã quản trị viên</p>
            <input type="text" disabled/>
        </label>

        <label htmlFor="" className="value_admin_box">
            <p>Họ và tên</p>
            <input type="text" disabled={isdisabled}/>
        </label>

        <label htmlFor="" className="value_admin_box">
            <p>Ngày sinh</p>
            <input type="date" disabled={isdisabled}/>
        </label>

        <label htmlFor="" className="value_admin_box">
            <p>Email</p>
            <input type="email" disabled={isdisabled}/>
        </label>

        <label htmlFor="" className="value_admin_box">
            <p>Số điện thoại</p>
            <input type="phone" disabled={isdisabled}/>
        </label>
        
        <label htmlFor="" className="value_admin_box">
            <p>Ngày đăng ký</p>
            <input type="date" disabled={isdisabled}/>
        </label>

        {!isdisabled && (
            <div className="-settings-btn" onClick={handleUpadte}>Cập nhật thông tin</div>
        )}
    </>
    )
}