import axios from "axios";
import { validInfoAdmin, validLogin } from "../valid/audthValid";
import { encryptAES, hashPassword } from '../security/CryptAES';

export const RegisterAPI = async (name, email, password, re_password, phone, setForm) => {
  try {
      const data = [name, email, password, re_password, phone];
      if (validInfoAdmin(data)) {    
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
              alert(response.message)
              setForm('login');
          }
      }
  }catch (error) {
      console.log('Chi tiết lỗi:', {
          response: error.response?.data,
          status: error.response?.status,
          message: error.message,
          stack: error.stack
      });
      alert(error.response?.data?.message || 'Đăng ký thất bại');
  }   
}


export const LoginAPI = async (email, password, setIsHidden) => {
  try {
    const data = [email, password];
    console.log("1. Data trước khi validate:", data);

    if (validLogin(data)) {
      // Tạo FormData hoặc object để gửi
      const loginData = {
        email: email,
        password: password,
      };

      console.log("2. Data gửi đi:", loginData);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/admin_login",
        loginData, // Gửi trực tiếp object
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      console.log("3. Response từ server:", response.data);

      if (response.status === 200) {
        alert("Đăng nhập thành công");
        setIsHidden(false);
      } else if(response.status === 404 && response.message === 'Email không khớp') {
        alert("Email không tồn tại");
      } else if(response.status === 401 && response.message === 'Sai mật khẩu') {
        alert("Sai mật khẩu");
      }
    }
  } catch (error) {
    console.error("4. Error details:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    alert("Đăng nhập thất bại");
  }
};
