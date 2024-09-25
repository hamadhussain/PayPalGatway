// // src/components/PaypalButton.js
// import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
"use client"
// const PaypalButton = () => {
//   const initialOptions = {
//     clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
//     currency: 'USD',
//     intent: 'capture',
//   };

//   const createOrder = async () => {
//     const response = await fetch('/api/create-order', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ amount: '10.00' }), // Adjust the amount as needed
//     });
//     const orderData = await response.json();
//     return orderData.id; // Return the order ID from PayPal
//   };

//   const onApprove = async (data) => {
//     const response = await fetch('/api/capture-order', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ orderID: data.orderID }),
//     });
//     const captureData = await response.json();
//     alert(`Transaction completed by ${captureData.payer.name.given_name}`);
//   };

//   return (
//     <PayPalScriptProvider options={initialOptions}>
//       <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
//     </PayPalScriptProvider>
//   );
// };

// export default PaypalButton;








// src/components/PaypalButton.js
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState } from 'react';

const PaypalButton = () => {
  const initialOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    currency: 'USD',
    intent: 'capture',
  };

  const [error, setError] = useState(null);

  const createOrder = async () => {
    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: '10.00' }), // Adjust the amount as needed
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error creating order: ${errorData.error || 'Unknown error'}`);
      }

      const orderData = await response.json();
      return orderData.id; // Return the order ID from PayPal
    } catch (error) {
      setError(error.message);
      console.error('Create Order Error:', error);
      return ''; // Return empty string to indicate failure
    }
  };

  const onApprove = async (data) => {
    try {
      const response = await fetch('/api/capture-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderID: data.orderID }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error capturing order: ${errorData.error || 'Unknown error'}`);
      }

      const captureData = await response.json();
      alert(`Transaction completed by ${captureData.payer.name.given_name}`);
    } catch (error) {
      setError(error.message);
      console.error('Capture Order Error:', error);
    }
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
