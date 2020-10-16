/* eslint-disable no-empty-pattern */
import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
    const [{ }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className="checkoutproduct"  >

            <img src={image} className="checkoutproduct_image" alt="" />
            <div className="checkoutproduct_info">

                <p className="checkoutproduct_title" >{title}</p>
                <p className="checkoutproduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutproduct_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                // eslint-disable-next-line jsx-a11y/accessible-emoji
                                <p key={i.toString()}> 🌟  </p>
                            ))
                    }
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove From Basket</button>
                )}

            </div>
        </div >
    )
}

export default CheckoutProduct
