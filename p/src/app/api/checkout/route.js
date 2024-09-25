import { NextResponse } from "next/server";
import paypal from "@paypal/checkout-server-sdk";

let clientId =  process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
let clientSecret =  process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET;

let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

export async function POST() {
  let request = new paypal.orders.OrdersCreateRequest();

  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "100.00",
        },
      },
    ],
  });

  const response = await client.execute(request);

  return NextResponse.json({
    id: response.result.id,
  });
}