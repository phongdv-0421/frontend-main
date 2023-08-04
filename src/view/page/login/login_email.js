import './login_email.scss'
import React , {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login_email() {

    return ( 
        <div>
             <form>
                        <h3 className='login-form-header'>
                            Đăng nhập
                        </h3>
                        <input type="text" name='email' placeholder='Email/Số điện thoại/Tên đăng nhập' 
                        className='login-form-input' />
                        <input type="password" name='password' placeholder='Mật khẩu' 
                        className='login-form-input' 
                        />
                        <button className='login-form-btn'
                        >
                            ĐĂNG NHẬP
                        </button>
                        <div className='login-form-method'>
                            <div className='login-form-forget'>
                                Quên mật khẩu
                            </div>
                            <div className='login-form-sms'>
                                Đăng nhập bằng sms
                            </div>
                        </div>
                    </form>
        </div>
     );
}

export default Login_email;