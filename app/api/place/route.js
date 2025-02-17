import Place from "@/app/lib/models/place";
import connectMongoDB from "@/app/lib/mongodbConnection";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        const { name } = await request.json();
        await connectMongoDB();
        await Place.create({ name });
        return NextResponse.json({ message: "Place Created" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create place" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const places = await Place.find();
        return NextResponse.json(places);
    } catch (error) {
        console.error("Error retrieving places:", error);
        return NextResponse.json({ error: "Failed to retrieve places" }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await Place.findByIdAndDelete(id);
        return NextResponse.json({ message: "Place deleted" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting place:", error);
        return NextResponse.json({ error: "Failed to delete place" }, { status: 500 });
    }
}
