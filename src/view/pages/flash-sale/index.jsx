import React, {useState, useEffect} from "react";
import './flashSale.scss'
import Banner from "components/banner";
import Product from "components/product";
import productApi from "api/productAPI";
import { Link } from "react-router-dom";

function FlashSale(){
    
  const [products, setProducts] = useState([]);
 

  useEffect(()=> {
      const fetchProducts = async () => {
          const params = {_limit: 30}
          const productList = await productApi.getAllProduct(params);
          setProducts(productList.data);
      }
      fetchProducts();


  }, [])
    return (
        <div className="flash-sale-wrapper">
            <div className="flash-sale_banner">
                <div className="flash-sale_banner_image">
                <Banner
                        imageURL="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lkjiqnqs3y7e7e"
                        width='1200px'
                        height='360px'
                    />
                </div>
            </div>
            <div className="flash-sale_products">
                <ul>
                   
                    {products.map(post => {
                          return (
                          <Link key = {post.id} to={`/product-view/${post.id}`}>
                            <li>
                              <Product 
                                    imageURL={post.images[0]}
                                    name={post.name}
                                    discount ="giảm 25k"
                                    price={"$"+post.originalPrice}
                                    height = "188px"
                                    width = '187.5px'
                                    sold="7,2k"  
                                />
                            </li>
                              
                          </Link>
                          )
                      })}
                   
                </ul>
            </div>

        </div>
    )
}

export default FlashSale;