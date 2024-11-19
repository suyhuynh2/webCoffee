/* eslint-disable react/prop-types */
import { faLock, faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef } from "react"


export default function SettingFunc({handleSettingInfo, setActiveSpace}) {
    const targetInputFile = useRef()
    const handleUpdateAvt = () => {
        targetInputFile.current.click();
    }

    const handChangeSpace = (item) => {
        setActiveSpace(item);
    }
    return(
        <>
        <div className="wrap-setting-func">
            <img src="" alt="" />
            <div className="-setting-upload-avt" onClick={handleUpdateAvt}>
                <input type="file" hidden ref={targetInputFile}/>
                <FontAwesomeIcon icon={faUpload} />
                <p>Cập nhật avatar</p>
            </div>
            <div className="-setting-upload-avt" onClick={() => handChangeSpace('change_password')}>
                <FontAwesomeIcon icon={faLock} />
                <p>Đổi mật khẩu</p>
            </div>
            <div className="-setting-upload-avt" onClick={handleSettingInfo}>
                <FontAwesomeIcon icon={faLock} />
                <p>Chỉnh sửa thông tin</p>
            </div>
        </div>
        </>
    )
}