import React, { useState, useEffect } from 'react'
import { db } from './firebase';
import './Orders.css';
import { useStateValue } from './StateProvider';
import Order from './Order';




function Orders() {

    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        data: doc.data()
                    })))
                })

        } else {
            setOrders([])
        }
    },
        [user])

    return (
        <div className="orders">
            <div className="order_order">
                {
                    orders?.map((order, index) =>
                        <Order order={order} key={index} />)
                }
            </div>
        </div>
    )
}

export default Orders
