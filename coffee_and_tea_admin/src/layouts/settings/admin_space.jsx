import SettingFunc from "./setting_func";
import { useSettingSwitch } from "../../hooks/usePageSwitch";
import { useState } from "react";

export default function AdminSpace() {
    console.log("ADMIN SPACE: RENDER");
    const { setActiveSpace, renderSpace } = useSettingSwitch();
    const [isdisabled, setisdisabled] = useState(true);

    const handleUpadte = () => {
        setisdisabled(true);
    }
    
    const handleSettingInfo = () => {
        setisdisabled(prev => !prev)
    }

    return(
        <>
        <div className="wrap-admin-space">
            <h3>Thông tin chung</h3>

            <div className="admin-info">
                <div className="-w-admin-info">
                    {renderSpace({isdisabled, handleUpadte, setActiveSpace})}
                </div>

                <SettingFunc setActiveSpace={setActiveSpace} handleSettingInfo={handleSettingInfo}/>
            </div>
        </div>
        </>
    )
}