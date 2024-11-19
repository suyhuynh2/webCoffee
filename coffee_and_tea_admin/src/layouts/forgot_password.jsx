/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons';

export default function ForgotPassword({setForm}) {
    const handleSetForm = (item) => {
        setForm(item);
    }
    return(
        <>
        <div className="wrap-form-login" >
            <div className="login-box">
                <h1>Quên mật khẩu
                    <FontAwesomeIcon icon={faCoffee} />
                </h1>

                <div className="input-box">
                    <label htmlFor="">
                        <FontAwesomeIcon icon={faUser} />
                        <input type="email" placeholder="Email" />
                    </label>
                </div>

                <button className='login-box-btn'>Gửi mật khẩu mới</button>

                <div className="label-register">
                    <p>Tôi nhớ ra mật khẩu rồi.</p>
                    <FontAwesomeIcon icon={faHeart} />
                    <a href="#" onClick={() => handleSetForm('login')}><p>Đăng nhập</p></a>
                </div>

                <div className='bottom-box'>
                    <div className='box-icons'>
                        <FontAwesomeIcon className='fa-fb' icon={faFacebook} />
                        <FontAwesomeIcon className='fa-gg' icon={faGoogle} />
                        <FontAwesomeIcon className='fa-tt' icon={faTwitter} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}