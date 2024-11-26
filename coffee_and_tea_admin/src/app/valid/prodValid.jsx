export function validUpdatePrd(data) {
    console.log('Validation data:', data);

    for (let e of data) {
        if (!fullField(e)) {
            return false;
        }
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