import React, {useContext} from 'react'
import { ShopContext } from '../../Context/shop-context';

import { useNavigate } from 'react-router-dom';
   



export const Product = (props) => {
    const {id,productName,price,productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id]

    const navigate = useNavigate()

  return  (
  
        <div className="product">
            <img src={productImage} alt="" />
            <div className="description">
                <p> <b>{productName}</b> </p>
                <p>${price}</p>
            </div>
            <button className='addToCartBttn' onClick={()=>{addToCart(id)}}>
                Add To Cart {cartItemAmount>0 && <>({cartItemAmount})</>}</button>
                    
                    <div>
                    <button className='goCart' onClick={()=>navigate('/cart')}>Go To Cart</button>
                    </div>
        </div>
  )
  
}
