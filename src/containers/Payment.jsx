import React, { useContext } from 'react'
import AppContext from '../context/AppContext';
import { Order, LinkButton } from '@/components';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from "react-paypal-button-v2";

export const Payment = () => {
    const { state } = useContext(AppContext);
    const { cart, buyer } = state;
    const history = useHistory();

    const paypalOptions = {
        clientId: 'Adhk4hulUKf0OcdkuAdaxJT8xrmHUKGalshlE2W4idj2wTgO8x-QFRhcQhwamQZ9keqSYUeS3b7IqjCS',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handleTotalSum = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    };

    let subtotal = handleTotalSum();
    let VAT = subtotal + (subtotal * 0.16);
    const total = VAT.toFixed(2);

    const handlePaymentSuccess = (data) => {
        console.log(data)
        if(data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);
            history.push('/checkout/success');
        }
    }

    return (
        <>
            <div className="container p-6 mx-auto">
                <div className="md:w-3/5 w-full pb-6 md:pb-0 md:pr-6 mx-auto">
                    <Order />
                    <LinkButton path='/checkout/success' message='Pagar' />
                    <PayPalButton 
                        options={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={total}
                        onSuccess={data => handlePaymentSuccess(data)}
                    />
                </div>
            </div>
        </>
    )
}
