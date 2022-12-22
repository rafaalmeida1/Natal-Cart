import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "phosphor-react";
import Lottie from "lottie-react";
import papanelAnimation from "../public/assets/papanel.json";
import woodAnimation from "../public/assets/wood.json";
import papanelHead from "../public/assets/papanelHead.json";

const myLoader = () => {
  return "https://i.imgur.com/780BLED.png";
};

export default function SantaCart() {
  const { name } = useContext(FormContext);

  return (
    <main className="h-screen w-screen lg:w-[40%] flex flex-col items-center justify-center mx-auto relative bg-bgNatal bg-cover shadow-white shadow-xl">
      {name === "" ? (
        <>
          <Link href="/">
            <h1 className="text-[#FFD700] text-4xl flex items-center gap-4">
              <ArrowLeft />
              Volte para fazer um cartão de natal
            </h1>
          </Link>
        </>
      ) : (
        <>
          <div className="relative">
            <Lottie
              animationData={papanelHead}
              className="absolute top-[-5rem] left-[-5rem] md:top-[-7rem] md:left-[-7rem] w-32 md:w-44 -rotate-45"
            />
            <h1 className="text-5xl sm:text-8xl lg:text-6xl text-white font-bold">
              FELIZ NATAL
            </h1>
          </div>
          <h2 className="text-5xl sm:text-8xl text-[#FFD700] pt-5">{name}</h2>
          <Lottie
            animationData={papanelAnimation}
            className=" w-60 sm:w-96 lg:w-72 absolute top-0"
          />
          <Lottie
            animationData={woodAnimation}
            className=" w-72 sm:w-96 absolute bottom-0 right-0 duration-150"
            loop={false}
          />
          <Lottie
            animationData={woodAnimation}
            className=" w-72 sm:w-96 absolute bottom-0 left-0 duration-150"
            loop={false}
          />
        </>
      )}
    </main>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
