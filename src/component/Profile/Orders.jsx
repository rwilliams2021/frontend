import React, { useEffect } from 'react';
import OrderCard from './OrderCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsersOrders } from '../State/Order/Action';

const Orders = () => {
  const { auth, order } = useSelector(store => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.jwt) {
      dispatch(getUsersOrders(auth.jwt));
    } else {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [auth.jwt, dispatch, navigate]);

  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
      <div className='space-y-5 w-full lg:w-1/2'>
        {order.orders.length > 0 ? (
          order.orders.map((order) =>
            order.items.map((item) => (
              <OrderCard key={item.id} item={item} order={order} />
            ))
          )
        ) : (
          <p className='text-center'>You have no orders.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
