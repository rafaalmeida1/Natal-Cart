import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "phosphor-react";
import Lottie from "lottie-react";
import papanelAnimation from "../public/assets/papanel.json";
import woodAnimation from "../public/assets/wood.json";
import papanelHead from "../public/assets/papanelHead.json";

export default function SantaCart() {
  const { name } = useContext(FormContext);

  return (
    <main className="h-screen w-[40%] flex flex-col items-center justify-center mx-auto bg-blur bg-cover shadow-white shadow-lg relative">
      {name === "" ? (
        <Link href="/">
          <h1 className="text-[#FFD700] text-4xl flex items-center gap-4"><ArrowLeft />Volte para fazer um cartão de natal</h1>
        </Link>
      ) : (
        <>
          <div className="relative">
            <Lottie
              animationData={papanelHead}
              className="absolute top-[-7rem] left-[-7rem] w-44 -rotate-45"
            />
            <h1 className="text-6xl text-white font-bold">FELIZ NATAL</h1>
          </div>
          <h2 className="text-5xl text-[#FFD700] pt-5">{name}</h2>
          <Lottie
            animationData={papanelAnimation}
            className="w-72 absolute top-0"
          />
          <Lottie
            animationData={woodAnimation}
            className="w-72 absolute bottom-0 right-0 scale-90 hover:scale-100 duration-150"
            loop={false}
          />
          <Lottie
            animationData={woodAnimation}
            className="w-72 absolute bottom-0 left-0 scale-90 hover:scale-100 duration-150"
            loop={false}
          />
        </>
      )}
    </main>
  );
}
