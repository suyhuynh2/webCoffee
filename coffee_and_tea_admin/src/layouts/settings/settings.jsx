import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminSpace from "./admin_space";

export default function Settings () {
    return (
    <>
        <div className="wrap-settings">
            <div className="title_box">
                <FontAwesomeIcon icon={faGear} />
                <h2 className="products-title">Cài đặt</h2>
            </div>

            <div className="wrap-body-settings">
                <AdminSpace/>
            </div>
        </div>
    </>
    )
}