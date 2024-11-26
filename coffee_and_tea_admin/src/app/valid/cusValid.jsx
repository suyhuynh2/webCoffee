export function validUpdateCus(data) {
    console.log('Validation data:', data);

    for (let e of data) {
        if (!fullField(e)) {
            return false;
        }
    }
    if (!isValidEmail(data[4])) {
        alert('Email không hợp lệ');
        return false;
    }
    if (!isValidPhone(data[3])) {
        alert('Số điện thoại không hợp lệ');
        return false;
    }
    return true;
}


export const fullField = (data) => {
    if (data === null || data === undefined || data === '') {
        alert('Vui lòng nhập đầy đủ thông tin');
        return false;
    }
    return true;
};

  export const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    const emailPattern2 = /^[a-zA-Z0-9._-]+@vku\.udn\.vn$/;
    if (!emailPattern.test(email) && !emailPattern2.test(email)) {
        return false;
    }
    return true;
  }
  export const isValidPhone = (phone) => {
    const phonePattern = /^(0[1-9])[0-9]{8}$/;
    if (!phonePattern.test(phone)) return false;
    return true;
  }