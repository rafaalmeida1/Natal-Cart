import Link from "next/link";
import { GithubLogo } from "phosphor-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen w-screen lg:w-[40%] flex flex-col items-center justify-center mx-auto relative bg-bgNatal bg-cover">
      <Link href="https://github.com/rafaalmeida1" className="absolute top-5 right-5 p-2 bg-gradient-to-l from-[#9422c2] to-[#9667a8] scale-95 hover:scale-100 duration-150 rounded-full" target="_blank">
        <GithubLogo size={32} />
      </Link>
      {children}
    </main>
  );
}