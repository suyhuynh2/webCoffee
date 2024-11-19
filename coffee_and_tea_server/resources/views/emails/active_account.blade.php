<div style="width: 600px; margin: 0 auto">
    <div style="text-align: center">
        <h2>Xin Chào</h2> 
        <br>
        <h2>{{ $name }}</h2>
        <p>Bạn đã đăng ký tài khoản tại hệ thống chúng tôi</p>
        <p>Để tiếp tục sử dụng dịch vụ vui lòng nhấn nút vào nút kích hoạt ở bên dưới.</p>
        <a href="{{ route('activeAccount', ['admin' => $email, 'token' => $token]) }}" 
           style="display: inline-block; background: green; color: #fff; padding: 7px 25px; font-weight: bolder">
            Kích hoạt tài khoản
        </a>
    </div>
</div>
