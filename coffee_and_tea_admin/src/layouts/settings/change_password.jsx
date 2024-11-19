/* eslint-disable react/prop-types */

import { faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ChangePassword({setActivePage}) {
    const handleBackAdminInfo = (item) => {
        setActivePage(item)
    }
    return(
        <>
        <label htmlFor="" className="value_admin_box">
            <p><FontAwesomeIcon icon={faLock}/>  Mật khẩu cũ</p>
            <input type="password" />
        </label>
            
        <label htmlFor="" className="value_admin_box">
            <p><FontAwesomeIcon icon={faLock}/>  Mật khẩu mới</p>
            <input type="password" />
        </label>

        <label htmlFor="" className="value_admin_box">
            <p><FontAwesomeIcon icon={faLock}/>  Mật khẩu mới</p>
            <input type="password" />
        </label>

        <div className="-settings-btn" >Đổi mật khẩu</div>
        <div className="-settings-btn" onClick={() => handleBackAdminInfo('admin_info')}>
            Quay về</div>
        </>
    )
}