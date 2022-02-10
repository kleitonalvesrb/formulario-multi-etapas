import { useEffect } from "react";
import { FormProvider } from "./contexts/FormContext";
import { Router } from "./router";

export const App = () => {
  useEffect(() => {
    console.log("parou em 27:30 https://www.youtube.com/watch?v=W1Ed9TEMGJU");
  }, []);

  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
};

export default App;
