import './login_qr.scss'
import qrcode from '../../../assets/images/qr-shopee.png'


function LoginQR() {
    return ( 
        <div>
            <form>
                <h3 className='login-qr-header'>
                    Đăng nhập mới mã QR
                </h3>
                <div className='login-qr-image'>
                    <img src={qrcode}  alt = "anh" />
                </div>
                <p className='login-qr-des'>
                    Quét mã QR bằng ứng dụng shopee
                </p>
                <p className='login-qr-how'>
                    Làm thế nào để quét mã QR
                </p>
            </form>
        </div>
    );
}

export default LoginQR;