// // src/app/api/create-order/route.js
// export async function POST(req) {
//     const { amount } = await req.json();
  
//     const response = await fetch('https://api.sandbox.paypal.com/v2/checkout/orders', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${process.env.PAYPAL_ACCESS_TOKEN}`, // Obtain this token from your server
//       },
//       body: JSON.stringify({
//         intent: 'CAPTURE',
//         purchase_units: [{ amount: { currency_code: 'USD', value: amount } }],
//       }),
//     });
//     const data = await response.json();
//     return new Response(JSON.stringify(data), { status: 200 });
//   }
  







// src/app/api/create-order/route.js
export async function POST(req) {
    try {
      const { amount } = await req.json();
  
      const response = await fetch('https://api.sandbox.paypal.com/v2/checkout/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.PAYPAL_ACCESS_TOKEN}`, // Obtain this token from your server
        },
        body: JSON.stringify({
          intent: 'CAPTURE',
          purchase_units: [{ amount: { currency_code: 'USD', value: amount } }],
        }),
      });
  
      // Check if response is not OK
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.message}`);
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error('Error creating order:', error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }

  