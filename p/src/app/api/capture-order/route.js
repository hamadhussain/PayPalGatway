// // src/app/api/capture-order/route.js
// export async function POST(req) {
//     const { orderID } = await req.json();
  
//     const response = await fetch(`https://api.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${process.env.PAYPAL_ACCESS_TOKEN}`, // Obtain this token from your server
//       },
//     });
//     const data = await response.json();
//     return new Response(JSON.stringify(data), { status: 200 });
//   }
  







// src/app/api/capture-order/route.js
export async function POST(req) {
    try {
      const { orderID } = await req.json();
  
      const response = await fetch(`https://api.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.PAYPAL_ACCESS_TOKEN}`, // Obtain this token from your server
        },
      });
  
      // Check if response is not OK
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.message}`);
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error('Error capturing order:', error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  