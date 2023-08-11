import mongoose from "mongoose";

export const movie = [
    {
      _id: new mongoose.Types.ObjectId(),
      movieName: "Spiderman",
      description: "man gets bit by spider",
      picturePath: "movie1.jpeg",
      rating: "5 out of 5",
      review: [
        "random comment",
        "another random comment",
        "yet another random comment",
      ],
    },
    {
        _id: new mongoose.Types.ObjectId(),
        movieName: "Superman",
        description: "strong man that is super",
        picturePath: "movie2.jpeg",
        rating: "4 out of 5",
        review: [
          "random comment",
          "another random comment",
          "yet another random comment",
        ],
      },
  ];