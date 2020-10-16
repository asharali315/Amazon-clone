import React from 'react';
import './SubTotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './Reducer';
import { useHistory } from 'react-router-dom';

function SubTotal() {

    const history = useHistory();
    const [{ basket }] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat

                renderText={(value) => (
                    <>
                        <p>
                            SubTotal ({basket?.length} items):<strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order Contains a gift
               </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={event => history.push('/payment')} >Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
