import { useForm, FormAction } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { useHistory } from "react-router-dom";
import * as C from "./sytles";
import { ChangeEvent, useEffect } from "react";

export const FormStep1 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
      console.log("parou em 1:19:00 https://www.youtube.com/watch?v=W1Ed9TEMGJU");
    dispatch({
      type: FormAction.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
      if(state.name !== ''){
        history.push("/step2");
      }else{
          alert("Preencha os dados!");
      }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setName,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Cotainer>
        <p>Passo 1/3 - {state.currentSetp}</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>
        <hr />
        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Cotainer>
    </Theme>
  );
};

export default FormStep1;
