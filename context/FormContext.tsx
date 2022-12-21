import { createContext, ReactNode, useState } from "react"

interface FormContextData {
  setNameInCart: (name: string) => void;
  name: string;
}

export const FormContext = createContext({} as FormContextData)

interface CyclesContextProviderProps {
  children: ReactNode
}

interface NewCartData {
  name: string
}

export function FormContextProvider({
  children,
}: CyclesContextProviderProps) {

  const [name, setName] = useState('');

  function setNameInCart(name: string) {
    setName(name);
  }


  return (
    <FormContext.Provider value={{setNameInCart, name}}>
      {children}
    </FormContext.Provider>
  )

}