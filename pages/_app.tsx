import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FormContextProvider } from "../context/FormContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormContextProvider>
        <Component {...pageProps} />
    </FormContextProvider>
  );
}
