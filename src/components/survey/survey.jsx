import React from "react";
import classes from './survey.module.scss'
import Genre from "../genre/genre";
const Survey = ({survey, number}) => {
    console.log(survey);
    return (
        <section className={classes.container}>
            <h1 className={classes.header}>Survey #{number+1}</h1>
            <h1>name: {survey.name}</h1>
            <h2>country: {survey.country}</h2>
            <h3>email: {survey.email}</h3>
            {
                survey.genresRatings?.map(genreRatings => {
                    return (
                        <>
                        <Genre genreRatings={genreRatings}/>
                        <div className={classes.br}></div>
                        </>
                    )
                    
                })
            }
            

        </section>
    )
}
export default Survey;