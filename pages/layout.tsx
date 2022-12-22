import Image from "next/image";
import Link from "next/link";
import { GithubLogo } from "phosphor-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen w-screen lg:w-[40%] flex flex-col items-center justify-center mx-auto relative">
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src="/assets/bgNatal.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <Link
        href="https://github.com/rafaalmeida1"
        className="absolute top-5 right-5 p-2 bg-gradient-to-l from-[#9422c2] to-[#9667a8] scale-95 hover:scale-100 duration-150 rounded-full"
        target="_blank"
      >
        <GithubLogo size={32} />
      </Link>
      {children}
    </main>
  );
}
