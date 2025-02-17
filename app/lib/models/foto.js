import mongoose, { Schema } from "mongoose";

const FotoSchema = new Schema(
    {
        img: { type: String },

        date: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Year',
        },
        name: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Place',
        },
    },
    {
        timestamps: true
    }
)

const Foto = mongoose.models.Foto || mongoose.model('Foto', FotoSchema)
export default Foto

