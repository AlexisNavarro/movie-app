import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
    {
        movieName:{
            type: String,
            required: true,
        },
        description: String,
        picturePath: String,
        rating: String,
        reviews: {
            types: Array,
            default: []
        }
    },
    {timestamps: true}
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;