import Movie from "../models/movies";


//get the movies

export const getMovieList = async(req, res) => {
    try{
        const movie_list = await Movie.find(); //grab ALL the posts
        res.status(200).json(movie_list); //return the posts
    }catch(err){
        res.status(404).json({message: err.message});
    }
}   