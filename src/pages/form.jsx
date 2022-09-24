import React from "react";
import { Form } from "../components/Form";
import {Survey} from "../context/survey";
import { useState } from "react";
import { Validate } from "../context/Validate";

const FormPage = () => {
  const [info, setinfo] = useState({name:'',country:'',email:'',ratings:[]})
  const [validate,setvalidate]=useState(false)
  return (
    <Validate.Provider value={{validate,setvalidate}}>
    <Survey.Provider value={{info,setinfo}}>
      <div>
        <Form />
     
      </div>
    </Survey.Provider>
    </Validate.Provider>
  );
};

export default FormPage;
