import mongoose, { Schema } from "mongoose";

const PlaceSchema = new Schema(
    {
        name: { type: String, required: true }
    },
    {
        timestamps: true,
    }
)

const Place = mongoose.models.Place || mongoose.model('Place', PlaceSchema)

export default Place

