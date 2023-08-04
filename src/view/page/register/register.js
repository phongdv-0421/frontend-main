import './register.scss'
import { useState } from 'react';
import facebook from '../../../assets/images/Facebook_Logo.png'
import google from '../../../assets/images/google_logo.png'
import Background from '../../../assets/images/register-background.jpg'
import {Link} from 'react-router-dom'

function Register (){
    const [values, setValues] = useState(
        {
            email : '',
            password : '',
            confirm_password : ''
        }
    )
    const [errors, setErrors] = useState({});
    const handleInput = (e)=> {
        setValues({...values, [e.target.name]:[e.target.value]})
    }
    function handleValidation(){
        setErrors(validation(values))
    }
    function validation (values){
        let error = {}
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
        if (values.email==="")
            error.email = "Email không được để trống"
        if (!email_pattern.test(values.email))
            error.email = "Không hợp lệ"
        if (values.password==="")
            error.password = "Mật khẩu không được để trống"
        if (!password_pattern.test(values.email))
            error.password = "Không hợp lệ"
        if (values.confirm_password === "" || values.confirm_password != values.password)
            error.confirm_password = "Mật khâủ không hợp lệ"
        return error;
    }
    return (
            <div className='register-content' style ={{backgroundImage: `url(${Background})`}}>
                <div className='register-content-left'>
                </div>
                <div className='register-form'>
                    <form onSubmit={handleValidation}>
                        <div className='register-form-header'>
                            Đăng ký
                        </div>
                        <label for= 'email' className='register-label'>Email</label> <br/>
                        <input 
                            type = 'text'
                            id = 'email'
                            name = 'email'
                            placeholder='Nhập email'
                            required
                            className='register-input'
                            onChange={(e) => handleInput(e)}
                        />
                        {errors.email && <p style={{color : 'red'}}>{errors.email}</p>}
                        <br/><br/>
                        <label for= 'password' className='register-label'>Mật khẩu</label> <br/>
                        <input 
                            type = 'password'
                            id = 'password'
                            name = 'password'
                            placeholder='Nhập mật khẩu'
                            required
                            className='register-input'
                            onChange={(e) => handleInput(e)}
                        />
                        {errors.password && <p style={{color : 'red'}}>{errors.password}</p>}

                        <br/><br/>
                        <label for= 'confirm_password' className='register-label'>Nhập lại mật khẩu</label><br/>
                        <input 
                            type = 'password'
                            id = 'confirm_password'
                            name = 'confirm_password'
                            placeholder='Nhập lại mật khẩu'
                            required
                             className='register-input'
                            onChange={(e) => handleInput(e)}
                        />
                        {errors.confirm_password && <p style={{color : 'red'}}>{errors.confirm_password}</p>}

                        <br/>
                        <button className='register-btn' disabled>
                            TIẾP THEO
                        </button>
                        <div className='register-form-footer'>
                            <div className='register-footer-top'>
                                    <div className='register-line'></div>
                                    <div className='register-line-des'>HOẶC</div>
                                     <div className='register-line'></div>
                            </div>
                            <div className='register-footer-icon'>
                               <button className='register-footer-btn'>
                               <img src={facebook}  alt='anh'  className='register-footer-img'/>
                                    Facebook
                               </button>
                               <button className='register-footer-btn'>
                               <img src={google}  alt='anh'  className='register-footer-img'/>
                                    Google
                               </button>
                                
                            </div>
                            <p className='register-footer-des'>
                            Bằng việc đăng kí, bạn đã đồng ý với Shopee về <br/>
                                <a href='' className='register-link'>Điều khoản và dịch vụ</a>
                                           <span> & </span> 
                                <a href='' className='register-link'>Chính sách bảo mật</a>
                            </p>
                            <p className='register-login'>
                                <span style = {{color : '#ccc'}}>Bạn đã có tài khoản? </span> 
                                <Link to = '/login' className='register-link'>Đăng nhập</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default Register