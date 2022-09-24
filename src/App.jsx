import React from "react";
import { Switch, Route } from "react-router-dom";
import FormPage from "./pages/form";
import ReportPage from './pages/report';
import AudioPage from './pages/audio';
import Home from './pages/home'
const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/form">
        <FormPage />
      </Route>
      <Route path="/report">
        <ReportPage />
      </Route>
      <Route path="/audio">
        <AudioPage />
      </Route>
    </Switch>
  )

};

export default App;


// import React from "react";
// import { Form } from "./components/Form";
// import {Survey} from "./context/survey";
// import { useState } from "react";
// import { Validate } from "./context/Validate";

// const App = () => {
//   const [info, setinfo] = useState({name:'',country:'',email:'',ratings:[]})
//   const [validate,setvalidate]=useState(false)
//   return (
//     <Validate.Provider value={{validate,setvalidate}}>
//     <Survey.Provider value={{info,setinfo}}>
//       <div>
//         <Form />
//         {/* <audio src="https://www.mboxdrive.com/rolex.mp3"></audio> */}
//         <audio controls ><source src="https://www.mboxdrive.com/rolex.mp3"/></audio>

//       </div>
//     </Survey.Provider>
//     </Validate.Provider>
//   );
// };

// export default App;
