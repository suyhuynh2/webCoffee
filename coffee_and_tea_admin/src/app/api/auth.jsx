import axios from "axios";
import { validRegister, validLogin, isValidEmail } from "../valid/audthValid";
import { encryptAES, hashPassword } from '../security/CryptAES';

export const RegisterAPI = async (name, email, password, re_password, phone, setForm) => {
    try {
        const data = [name, email, password, re_password, phone];
        if (validRegister(data)) {    
            const response = await axios.post('http://127.0.0.1:8000/api/admin_register', {
                name: encryptAES(name),
                email: encryptAES(email),
                password: hashPassword(password),
                phone: encryptAES(phone)
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 201) {
                alert(response.data.message)
                setForm('login');
            }
        }
    }catch (error) {
        alert(error.response?.data?.message || 'Đăng ký thất bại');
    }   
}

export const LoginAPI = async (email, password, setIsHidden) => {
  try {
      const data = [email, password];
      if (validLogin(data)) {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/admin_login", {
            email: encryptAES(email),
            password: hashPassword(password)
          },
          {
            headers: {
              "Content-Type": "application/json"
            },
          }
        );

      switch (response.status) {
        case 200: {
          alert(response.data.message);
          setIsHidden(false);
          // lưu token vào localStorage
          localStorage.setItem('jwt_token', response.data.jwt_token);
          break;
        }

        case 401:{
          alert(response.data.message);
          break;
        }
        case 403:{
          alert(response.data.message);
          break;
        }
        case 404:{
          alert(response.data.message);
          break;
        }
      }
    }
  } catch (error) {
    alert(error.response?.data?.message || 'Đăng nhập thất bại');
  }
};

export const ForgotPasswordAPI = async (email) => {
  try {
    if (isValidEmail(email)) {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/admin_forgot_password", {
            email: encryptAES(email)
          },
          {
            headers: {
              "Content-Type": "application/json"
            },
          }
        )

        if (response.status === 200) {
          alert(response.data.message)
        }
    }else 
    alert ("Email không hợp lệ.")
  }catch(error) {
    alert(error.response?.data?.message || 'Gửi mật khẩu mới thất bại');
  }
}