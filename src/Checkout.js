import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';

function Checkout() {

    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">

            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/Amazon13-20180907084126791.jpg"
                    alt="" />
                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>Your Shopping Basket is empty</h2>

                        </div>
                    ) :
                        (
                            <div>
                                <h2 className="checkout_title">Your Shopping Basket</h2>
                                {
                                    basket?.map((item, index) => (
                                        <CheckoutProduct
                                            key={index}
                                            image={item.image}
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            rating={item.rating}
                                        />
                                    ))}

                            </div>
                        )
                }
            </div>
            {basket?.length > 0 && (
                <div className="checkout_right">
                    <SubTotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
