/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { LoginAPI } from "../app/api/auth";

export default function Login({ setForm }) {
  const handleSetForm = (item) => {
    setForm(item);
  };

  const [isHidden, setIsHidden] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    LoginAPI(email, password, setIsHidden);
  }

  useEffect(() => {
    if (localStorage.getItem('jwt_token')) {
      setIsHidden(false);
    }
  })

  return (
    <>
      <div className="wrap-form-login" style={{display: isHidden ? 'flex' : 'none'}}>
        <div className="login-box">
          <h1>
            Đăng nhập
            {/* <FontAwesomeIcon icon={faCoffee} /> */}
          </h1>

          <div className="input-box">
            <label htmlFor="">
              <FontAwesomeIcon icon={faUser} />
              <input type="email" placeholder="Email" 
                value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>

            <label htmlFor="">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder="Mật khẩu"
              value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>

            <a href="#" onClick={() => handleSetForm("forgot_password")}>
              <p>Quên mật khẩu?</p>
            </a>
          </div>

          <button className="login-box-btn" onClick={handleLogin}>Đăng nhập</button>

          <div className="label-register">
            <p>Chưa có tài khoản?</p>
            <a href="#" onClick={() => handleSetForm("register")}>
              Đăng ký
            </a>
          </div>

          <div className="bottom-box">
            <div className="box-icons">
              <FontAwesomeIcon className="fa-fb" icon={faFacebook} />
              <FontAwesomeIcon className="fa-gg" icon={faGoogle} />
              <FontAwesomeIcon className="fa-tt" icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
