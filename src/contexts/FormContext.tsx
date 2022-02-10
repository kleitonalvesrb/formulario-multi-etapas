//context, Reducer, Provider, Hook

import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
  currentSetp: number;
  name: string;
  level: number;
  graduacao: 0 | 1;
  email: string;
  github: string;
};

const initialData: State = {
  currentSetp: 0,
  name: "",
  level: 0,
  graduacao: 0,
  email: "",
  github: "",
};

//reducer
export enum FormAction {
  setCurrentStep,
  setName,
  setLevel,
  setGraduacao,
  setEmail,
  setGithub,
}

type Action = {
  type: FormAction;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};
//Context
const FormContext = createContext<ContextType | undefined>(undefined);

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormAction.setCurrentStep:
      return { ...state, currentSetp: action.payload };
    case FormAction.setName:
      return { ...state, name: action.payload };
    case FormAction.setLevel:
      return { ...state, level: action.payload };
    case FormAction.setGraduacao:
      return { ...state, graduacao: action.payload };
    case FormAction.setEmail:
      return { ...state, email: action.payload };
    case FormAction.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
};

//provider
export const FormProvider = ({ children }: FormProviderProps) => {
  //uso padrão
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// Context Hook

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm precisa ser usado dentro do FormProvider");
  }
  return context;
};
