import connectMongoDB from '@/app/lib/mongodbConnection'
import Foto from '@/app/lib/models/foto'
import { NextResponse } from 'next/server'


export async function POST(request) {
    try {
        const { img, date, name } = await request.json()
        await connectMongoDB()
        const foto = await Foto.create({ img, date, name })
        return NextResponse.json(foto, { status: 201 });
    }
    catch (error) {
        return NextResponse.json({ error: "Failed to create foto" }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await Foto.findByIdAndDelete(id);
        return NextResponse.json({ message: "Foto deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete foto" }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const yearId = request.nextUrl.searchParams.get("yearId");
        const placeId = request.nextUrl.searchParams.get("placeId");
        const page = parseInt(request.nextUrl.searchParams.get("page"));
        const limit = parseInt(request.nextUrl.searchParams.get("limit"));
        await connectMongoDB()

        let fotos
        if (!yearId && !placeId) {
            fotos = await Foto.find().skip((page - 1) * limit).limit(limit)
        }

        if (yearId && !placeId) {
            fotos = await Foto.find({ date: yearId }).skip((page - 1) * limit).limit(limit)
        }

        if (!yearId && placeId) {
            fotos = await Foto.find({ name: placeId }).skip((page - 1) * limit).limit(limit)
        }

        if (yearId && placeId) {
            fotos = await Foto.find({ date: yearId, name: placeId }).skip((page - 1) * limit).limit(limit)
        }
        return NextResponse.json({ fotos }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ error: "Failed to retrieve fotos" }, { status: 500 });
    }
}