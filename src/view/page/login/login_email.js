import './login_email.scss'
import React , {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Login_email() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useNavigate();
    useEffect(()=> {
        if (localStorage.getItem('user-infor')){
            // history.push('/add')
        }
    },[]);

    async function login (){
        console.warn(email,password)
        let item = {email,password}
        let result = await fetch ('http://localhost:8000/api/auth/login',
        {
            method : 'POST',
            headers : {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body : JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-infor",JSON.stringify(result))
        // history.push('/add')
    }

    return ( 
        <div>
             <form>
                        <h3 className='login-form-header'>
                            Đăng nhập
                        </h3>
                        <input type="text" name='email' placeholder='Email/Số điện thoại/Tên đăng nhập' 
                        className='login-form-input' required
                        onChange={(e)=> setEmail(e.target.value) }/>
                        <input type="password" name='password' placeholder='Mật khẩu' 
                        className='login-form-input' required
                        onChange={(e)=> setPassword(e.target.value) }
                        />
                        <button className='login-form-btn'
                        onClick={login}
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