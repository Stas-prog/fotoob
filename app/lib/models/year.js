import mongoose, { Schema } from "mongoose";

const YearSchema = new Schema(
    {
        date: { type: Number, required: true }
    },
    {
        timestamps: true,
    }
)

const Year = mongoose.models.Year || mongoose.model('Year', YearSchema)

export default Year