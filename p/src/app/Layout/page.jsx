// 'use client'
// import React from "react";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";

// const Layout = ({ children }) => {
//     const initialOptions = {
//         clientId: "test",
//         currency: "USD",
//         intent: "capture",
//     };
//   return (
//     <div>
//       <PayPalScriptProvider
//         options={{
//           "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
//           currency: "USD",
//           intent: "capture",
//         }}
//       >
//         {" "}
//         {children}
//       </PayPalScriptProvider>
//     </div>
//   );
// };

// export default Layout;




'use client';
import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const Layout = ({ children }) => {
  const initialOptions = {
    'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    currency: 'USD',
    intent: 'capture',
  };

  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        {children}
      </PayPalScriptProvider>
    </div>
  );
};

export default Layout;
