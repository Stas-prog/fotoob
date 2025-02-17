import Year from "@/app/lib/models/year";
import connectMongoDB from "@/app/lib/mongodbConnection";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { date } = await request.json();
        await connectMongoDB();
        await Year.create({ date });
        return NextResponse.json({ message: "Year created" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create year" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const years = await Year.find();
        return NextResponse.json(years);
    } catch (error) {
        return NextResponse.json({ error: "Failed to retrieve years" }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await Year.findByIdAndDelete(id);
        return NextResponse.json({ message: "Year deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete year" }, { status: 500 });
    }
}
