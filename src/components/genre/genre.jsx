import React from "react";
import classes from "./genre.module.scss"

const Genre = ({genreRatings}) => {
    console.log(genreRatings)

    return (
        <section className={classes.container}>
            <h1>genre: {genreRatings.genre}</h1>
            <p>comment:  {genreRatings.comment}</p>
            <h1>RATINGS</h1>
            {genreRatings.ratings.map(rating => {
                return (
                    <h1>track: {rating.track_id}  -   rating: {rating.rating}</h1>
                )
            })}

        </section>
    )
}
export default Genre;