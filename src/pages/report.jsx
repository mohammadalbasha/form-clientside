import React, { useEffect } from "react";
import classes from './report.module.scss'
import Survey from '../components/survey/survey'
import { useState } from "react";
import useHttp from "../hooks/use-http.js";
import Spinner from "../components/Spinner/spinner";
import Error from "../components/Spinner/error";




const Report = (props) => {
  const [surveys, setSurveys] = useState([]);
  const { isLoading, error, sendRequest: getSurveys } = useHttp();


  useEffect(() => {
    const responseHandler = (data) => {
      setSurveys(data);
    }
    const url = 'https://form-serverside.vercel.app/surveys';
    getSurveys({ url }, responseHandler);
  }, []);

  return (
    <div className={classes.container}>
      {surveys?.map((survey, i) => {
        return (
          <>
          <Survey survey={survey} number={i} />
          <div className={classes.br}></div>
          </>
        )
      })}
      {isLoading && (
        <Spinner />
      )
      }
      {
        error && (
          <Error>
            {error}
          </Error>
        )
      }

    </div>
  )
}

export default Report;
