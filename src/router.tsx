import { BrowserRouter, Route } from "react-router-dom"
import FormStep1 from "./Pages/FormStep1"
import { FormStep2 } from "./Pages/FormStep2"
import { FormStep3 } from "./Pages/FormStep3"

export const Router = () =>{
    return (
        <BrowserRouter>
            <Route path="/" exact component={FormStep1}/>
            <Route path="/step2"  component={FormStep2}/>
            <Route path="/step3"  component={FormStep3}/>
            {/* <Route path="/" exact component={FormStep1}/> */}

        </BrowserRouter>
    )
}