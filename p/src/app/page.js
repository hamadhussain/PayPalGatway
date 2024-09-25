// // // // // // import Image from "next/image";
// // // // // // import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// // // // // // export default function Home() {
// // // // // //   const initialOptions = {
// // // // // //     clientId: "test",
// // // // // //     currency: "USD",
// // // // // //     intent: "capture",
// // // // // // };
// // // // // //   return (
// // // // // //     <>
// // // // // //       <PayPalScriptProvider deferLoading={true} options={initialOptions}>
// // // // // //             <PayPalButtons />
// // // // // //         </PayPalScriptProvider>

// // // // // //     </>
// // // // // //   );
// // // // // // }

// // // // // // src/app/page.js
// // // // // import PaypalButton from './components/PaypalButton';

// // // // // export default function Home() {
// // // // //   return (
// // // // //     <div>
// // // // //       <h1>PayPal Integration</h1>

// // // // //       <PaypalButton />
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // 'use client'
// // // // import { useState } from "react";
// // // // import { PayPalButtons } from "@paypal/react-paypal-js";

// // // // export default function Home() {
// // // //   const [amount, setAmount] = useState(0);

// // // //   return (
// // // //     <>
// // // //       <div className="container">
// // // //         <div className="row">
// // // //           <div className="col-md-6">
// // // //             <form className="form-horizontal">
// // // //               <fieldset>
// // // //                 <legend>Pay with PayPal</legend>
// // // //                 <div className="form-group">
// // // //                   <label className="col-md-4 control-label" htmlFor="amount">
// // // //                     Payment Amount
// // // //                   </label>
// // // //                   <div className="col-md-4">
// // // //                     <input
// // // //                       id="amount"
// // // //                       name="amount"
// // // //                       type="text"
// // // //                       onChange={(e) => setAmount(e.target.value)}
// // // //                       placeholder="amount to pay"
// // // //                       className="form-control input-md"
// // // //                       required
// // // //                     />
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="form-group">
// // // //                   <div className="col-md-4">
// // // //                     <PayPalButtons
// // // //                       style={{ layout: "horizontal" }}
// // // //                       createOrder={(data, actions) => {
// // // //                         return actions.order.create({
// // // //                           purchase_units: [
// // // //                             {
// // // //                               amount: {
// // // //                                 value: amount, // Use dynamic amount
// // // //                               },
// // // //                             },
// // // //                           ],
// // // //                         });
// // // //                       }}
// // // //                       onApprove={(data, actions) => {
// // // //                         return actions.order.capture().then((details) => {
// // // //                           alert(
// // // //                             "Transaction completed by " +
// // // //                               details.payer.name.given_name
// // // //                           );
// // // //                         });
// // // //                       }}
// // // //                     />
// // // //                   </div>
// // // //                 </div>
// // // //               </fieldset>
// // // //             </form>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }

// // // 'use client'
// // // import { useState } from "react";
// // // import { PayPalButtons } from "@paypal/react-paypal-js";

// // // export default function Home() {
// // //   const [amount, setAmount] = useState("");

// // //   return (
// // //     <>
// // //       <div className="container">
// // //         <div className="row">
// // //           <div className="col-md-6">
// // //             <form className="form-horizontal">
// // //               <fieldset>
// // //                 <legend>Pay with PayPal</legend>
// // //                 <div className="form-group">
// // //                   <label className="col-md-4 control-label" htmlFor="amount">
// // //                     Payment Amount
// // //                   </label>
// // //                   <div className="col-md-4">
// // //                     <input
// // //                       id="amount"
// // //                       name="amount"
// // //                       type="text"
// // //                       onChange={(e) => setAmount(e.target.value)}
// // //                       placeholder="amount to pay"
// // //                       className="form-control input-md"
// // //                       required
// // //                     />
// // //                   </div>
// // //                 </div>
// // //                 <div className="form-group">
// // //                   <div className="col-md-4">
// // //                     <PayPalButtons
// // //                       style={{ layout: "horizontal" }}
// // //                       createOrder={(data, actions) => {
// // //                         const amountValue = parseFloat(amount);
// // //                         if (isNaN(amountValue) || amountValue <= 0) {
// // //                           alert("Please enter a valid amount.");
// // //                           return;
// // //                         }
// // //                         return actions.order.create({
// // //                           purchase_units: [
// // //                             {
// // //                               amount: {
// // //                                 value: amountValue.toFixed(2), // Format to two decimal places
// // //                               },
// // //                             },
// // //                           ],
// // //                         });
// // //                       }}
// // //                       onApprove={(data, actions) => {
// // //                         return actions.order.capture().then((details) => {
// // //                           alert("Transaction completed by " + details.payer.name.given_name);
// // //                         });
// // //                       }}
// // //                       onError={(err) => {
// // //                         console.error("PayPal Button Error:");
// // //                         alert("An error occurred. Please try again.");
// // //                       }}
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </fieldset>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // 'use client';
// // import { useState } from "react";
// // import { PayPalButtons } from "@paypal/react-paypal-js";

// // export default function Home() {
// //   const [amount, setAmount] = useState("");

// //   return (
// //     <>
// //       <div className="container">
// //         <div className="row">
// //           <div className="col-md-6">
// //             <form className="form-horizontal">
// //               <fieldset>
// //                 <legend>Pay with PayPal</legend>
// //                 <div className="form-group">
// //                   <label className="col-md-4 control-label" htmlFor="amount">
// //                     Payment Amount
// //                   </label>
// //                   <div className="col-md-4">
// //                     <input
// //                       id="amount"
// //                       name="amount"
// //                       type="text"
// //                       onChange={(e) => setAmount(e.target.value.trim())} // Trim spaces
// //                       placeholder="amount to pay"
// //                       className="form-control input-md"
// //                       required
// //                     />
// //                   </div>
// //                 </div>
// //                 <div className="form-group">
// //                   <div className="col-md-4">
// //                     <PayPalButtons
// //                       style={{ layout: "horizontal" }}
// //                       createOrder={(data, actions) => {
// //                         const amountValue = parseFloat(amount);
// //                         if (isNaN(amountValue) || amountValue <= 0) {
// //                           alert("Please enter a valid amount.");
// //                           return;
// //                         }
// //                         console.log("Creating order with amount:", amountValue);
// //                         return actions.order.create({
// //                           purchase_units: [
// //                             {
// //                               amount: {
// //                                 value: amountValue.toFixed(2), // Format to two decimal places
// //                               },
// //                             },
// //                           ],
// //                         }).then((orderId) => {
// //                           console.log("Order created:", orderId);
// //                           return orderId; // Return the order ID
// //                         });
// //                       }}
// //                       onApprove={(data, actions) => {
// //                         return actions.order.capture().then((details) => {
// //                           alert("Transaction completed by " + details.payer.name.given_name);
// //                         });
// //                       }}
// //                       onError={(err) => {
// //                         console.error("PayPal Button Error:", err);
// //                         alert("An error occurred. Please try again.");
// //                       }}
// //                     />
// //                   </div>
// //                 </div>
// //               </fieldset>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import { PayPalButtons } from "@paypal/react-paypal-js";

// export default function Home() {
//   const [amount, setAmount] = useState("");

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <form className="form-horizontal">
//               <fieldset>
//                 <legend>Pay with PayPal</legend>
//                 <div className="form-group">
//                   <label className="col-md-4 control-label" htmlFor="amount">
//                     Payment Amount
//                   </label>
//                   <div className="col-md-4">
//                     <input
//                       id="amount"
//                       name="amount"
//                       type="text"
//                       onChange={(e) => setAmount(e.target.value.trim())}
//                       placeholder="amount to pay"
//                       className="form-control input-md"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   {/* <div className="col-md-4">
//                     <PayPalButtons
//                       style={{ layout: "horizontal" }}
//                       createOrder={(data, actions) => {
//                         const amountValue = parseFloat(amount);
//                         if (isNaN(amountValue) || amountValue <= 0) {
//                           alert("Please enter a valid amount.");
//                           return;
//                         }
//                         return actions.order.create({
//                           purchase_units: [
//                             {
//                               amount: {
//                                 value: amountValue.toFixed(2),
//                               },
//                             },
//                           ],
//                         }).then((orderId) => {
//                           return orderId;
//                         }).catch((err) => {
//                           console.error("Error creating order:", err);
//                           alert("Failed to create order. Please try again.");
//                         });
//                       }}
//                       onApprove={(data, actions) => {
//                         return actions.order.capture().then((details) => {
//                           alert("Transaction completed by " + details.payer.name.given_name);
//                         });
//                       }}
//                       onError={(err) => {
//                         console.error("PayPal Button Error:", err);
//                         alert("An error occurred. Please try again.");
//                       }}
//                     />
//                   </div> */}
//                   <PayPalButtons
//                     style={{ layout: "vertical", color: "silver" }}
//                     createOrder={async (data, actions) => {
//                       const res = await fetch("/api/checkout", {
//                         method: "POST",
//                         headers: {
//                           "Content-Type": "application/json",
//                         },
//                       });
//                       const order = await res.json();
//                       console.log(order);
//                       return order.id;
//                     }}
//                     onCancel={(data) => {
//                       console.log("Cancelled:", data);
//                     }}
//                     onApprove={(data, actions) => {
//                       console.log("Approved:", data);
//                       actions.order.capture();
//                     }}
//                   />
//                 </div>
//               </fieldset>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }








"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function HomePage() {
  return (
    <div className="h-screen bg-slate-900 flex items-center justify-center">
      <PayPalScriptProvider
        options={{
          clientId:
          process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        }}
      >
        <PayPalButtons
          style={{ layout: "vertical", color: "silver" }}
          createOrder={async (data, actions) => {
            const res = await fetch("/api/checkout", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            });
            const order = await res.json();
            console.log(order);
            return order.id;
          }}
          onCancel={(data) => {
            console.log("Cancelled:", data);
          }}
          onApprove={(data, actions) => {
            console.log("Approved:", data);
            actions.order.capture();
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default HomePage;