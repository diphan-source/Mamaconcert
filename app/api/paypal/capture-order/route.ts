import { NextResponse } from "next/server";
import { capturePaypalOrder, getPaypalAccessToken } from "@/lib/paypal";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { orderId?: string };
    const orderId = body.orderId?.trim();

    if (!orderId) {
      return NextResponse.json(
        { error: "Missing required field: orderId" },
        { status: 400 }
      );
    }

    const accessToken = await getPaypalAccessToken();
    const capture = await capturePaypalOrder({ accessToken, orderId });

    return NextResponse.json({ capture });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to capture PayPal order.",
      },
      { status: 500 }
    );
  }
}
