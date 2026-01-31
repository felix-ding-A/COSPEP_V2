import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/sanity";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { name, email, company, phone, productInterest, quantity, message } = body;

        // Validate required fields
        if (!name || !email) {
            return NextResponse.json(
                { error: "Name and email are required" },
                { status: 400 }
            );
        }

        // Create document in Sanity
        const document = {
            _type: "productRequest", // You'll need to create this schema in Sanity
            name,
            email,
            company,
            phone,
            productInterest,
            quantity,
            message,
            submittedAt: new Date().toISOString(),
            status: "new"
        };

        const result = await client.create(document);

        return NextResponse.json(
            { success: true, id: result._id },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error submitting request:", error);
        return NextResponse.json(
            { error: "Failed to submit request" },
            { status: 500 }
        );
    }
}
