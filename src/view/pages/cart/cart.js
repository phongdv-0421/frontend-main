
import Footer from '../../../components/footer'
import './cart.scss'
import shopeeLogo from '../../../assets/images/logo-shopee.png'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMap } from '@fortawesome/free-solid-svg-icons'
import freeship from '../../../assets/images/freeship.png'
import axios from 'axios'
import {useState, useEffect} from 'react'
import img from '../../../assets/images/product_detail1.jpg'

function Cart() {
    const [cart, setCart] = useState([])

    useEffect (()=> {
        axios.get('http://localhost:8000/api/cart/user-cart/3')
        .then (res => {
           setCart(res.data.cart)
        })
        .catch(err => console.log(err));
    }, [])

    const handleDecrease = (id, quantity) => {
        axios.patch('http://localhost:8000/api/cart/update-cart', {
            id : id,
            quantity : quantity
        })
        .then((res)=> {
            console.log(res)
        })
        .catch((err)=> console.log(err))

        setCart(cart => 
            cart.map((item)=>
                id === item.id ? {...item , quantity: item.quantity - (item.quantity > 1 ? 1 : 0), 
                    total_price : item.total_price - item.ProductDetail.Product.price
                } : item
        ))
    }
    const handleIncrease = (id, quantity) => {
        axios.patch('http://localhost:8000/api/cart/update-cart', {
            id : id,
            quantity : quantity
        })
        .then((res)=> {
            console.log(res)
        })
        .catch((err)=> console.log(err))
        setCart(cart => 
            cart.map((item)=>
                id === item.id ? {...item , quantity: item.quantity + 1,
                    total_price : item.total_price + item.ProductDetail.Product.price} : item
        ))
    }

    const arrCarts = cart.map((cart)=> {
        return <div className='cart-product-wrap'>
           <table>
                            <tr>
                                <td className='cart-product-col-special'>
                                    <div className='cart-product-des'>
                                        <input type='checkbox' id = {cart.id} className = 'cart-product-checkbox' />
                                        <img src = {img} alt= 'anh' className='cart-product-img'/>
                                        <h4 className='cart-product-header'>{cart.ProductDetail.Product.product_name}</h4>
                                    </div>
                                </td>
                                <td className='cart-product-category cart-product-col-single'>
                                    {cart.ProductDetail.color}, {cart.ProductDetail.size}
                                </td>
                                <td className='cart-product-col-single'>{cart.ProductDetail.Product.price}</td>
                                <td className='cart-product-col-single cart-product-btn'>
                                    <button onClick = {()=>handleDecrease(cart.id, cart.quantity)}>-</button>
                                    <button> {cart.quantity} </button>
                                    <button onClick={()=> handleIncrease(cart.id, cart.quantity)} >+</button>
                                </td>
                                <td className='cart-product-col-single'
                                    style = {{color : '#ee4d2d'}}
                                > {cart.total_price}</td>
                                <td className='cart-product-col-single cart-product-method'>
                                    <div>
                                        <button>Xóa</button>
                                        <p style={{color : '#ee4d2d'}}>Tìm sản phẩm tương tự</p>
                                    </div>
                                </td>
                            </tr>
                        </table> 
                        <div className='cart-product-shop'>
                            <FontAwesomeIcon icon = {faMap} className= 'cart-product-shop-voucher'/>
                            <p>Voucher của shop</p>
                        </div>
                        <div className='cart-product-ship'>
                            <img src= {freeship} alt= 'anh' className='cart-product-voucher'/>
                            <p>Giảm ₫15.000 phí vận chuyển đơn tối thiểu ₫50.000; Giảm ₫25.000 phí vận chuyển đơn tối thiểu ₫150.000
                                <span style={{color : '#007ac8', marginLeft : '12px'}}>Tìm hiểu thêm</span>
                            </p>
                        </div>
        </div>
    })


    return ( 
        <div className = 'cart-container'>
            <div className = 'cart-header'>
                <div className='cart-header-logo'>
                    <img src = {shopeeLogo} alt = 'anh logo shopee' className='cart-header-logo_img'/>
                    <div className='cart-header-line'></div>
                    <div className='cart-header-title'>GIỎ HÀNG</div>
                </div>  
                <div className='cart-header-search'>
                    <input type='text' placeholder = 'Siêu Vocher cùng săn ngay' className='cart-header-inp'/>
                    <button className='cart-header-search-btn'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </div>
            <div className='cart-body'>
                <div className='cart-body-wrap'>
                    <div className='cart-voucher'>
                        <img src= {freeship} alt = 'anh ship' className='cart-voucher-img'/>
                        <p>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</p>
                    </div>
                    <div className='cart-product-general'>
                        <table>
                            <tr>
                                <td colSpan={2} className = 'cart-product-col-double'>
                                    <input type = 'checkbox' id = 'cart-total-product' name = 'cart-total-product'
                                    className = 'cart-product-checkbox'
                                    />
                                    Sản Phẩm</td>
                                <td className='cart-product-col-single'>Đơn Giá</td>
                                <td className='cart-product-col-single'>Số Lượng</td>
                                <td className='cart-product-col-single'>Số Tiền</td>
                                <td className='cart-product-col-single'>Thao Tác</td>
                            </tr>
                        </table>
                    </div>

                    <div className = 'cart-product-item'>
                        {arrCarts}
                    </div>
                    <div className='cart-pay'>
                        <button>
                            Chọn tất cả
                        </button>
                        <button>Xóa</button>
                        <p>Tổng thanh toán : (0 sản phẩm) : <span style={{color : '#ee4d2d', fontSize : '20px'}}>đ0</span></p>
                        <button className='cart-pay-special'>Mua hàng</button>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
     );
}

export default Cart;