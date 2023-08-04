import './login.scss'
import facebook from '../../../assets/images/Facebook_Logo.png'
import google from '../../../assets/images/google_logo.png'
import React from 'react'
import Background from '../../../assets/images/register-background.jpg'
import {Link} from 'react-router-dom'
import LoginEmail from './login_email'
import LoginQR from './login-qr'
function Login() {
    return ( 
        <div className='login-content' style ={{backgroundImage: `url(${Background})`}}>
                <div className='login-content-left'>
                </div>
                <div className='login-form'>
                    <LoginEmail/>
                    {/* <LoginQR/> */}
                    <div className='login-form-footer'>
                            <div className='login-footer-top'>
                                    <div className='login-line'></div>
                                    <div className='login-line-des'>HOẶC</div>
                                     <div className='login-line'></div>
                            </div>
                            <div className='login-footer-icon'>
                               <button className='login-footer-btn'>
                               <img src={facebook}  alt='anh'  className='login-footer-img'/>
                                    Facebook
                               </button>
                               <button className='login-footer-btn'>
                               <img src={google}  alt='anh'  className='login-footer-img'/>
                                    Google
                               </button>
                                
                            </div>
                            <p className='login-login'>
                                <span style = {{color : '#ccc'}}>Bạn mới biết đến Shopee? </span> 
                                <Link to = "/register" className='login-link'>Đăng ký</Link>
                            </p>
                            <div className='login-method-change'>

                            <button className='login-by-qr'>
                                Đăng nhập bằng mã QR
                            </button>
                            <button className='login-by-email'>
                            Đăng nhập bằng email
                            </button>
                            </div>
                        </div>
                </div>
            </div>
     );
}

export default Login;