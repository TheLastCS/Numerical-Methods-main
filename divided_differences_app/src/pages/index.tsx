import Head from "next/head";
import Link from "next/link";
import Image from "next/image"
import bg from "../../public/images/bg.png"
import Header from "../components/Header"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <Image src={bg} alt="background_image" className="w-full" width={1000} height={1000}/>
        </div>
        <Header/>
      </div>

    </main>
  );
}
