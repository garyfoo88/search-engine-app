import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, TrendingDownIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router"

export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`)
  };

  return (
    <div style={{ height: "100vh" }} className="flex flex-col">
      <Head>
        <title>Seach Engine App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="./profilepic.png" />
        </div>
      </header>

      <form className="flex flex-col items-center mt-28 flex-grow">
        <Image src="/logo-search.png" width={300} height={200} />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg rounded-full border-gray-500 px-5 py-3 items-center sm: max-w-xl lg:max-w-2xl ">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} type="text" className="focus:outline-none  flex-grow"></input>
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>
            Search
          </button>
          <button className="btn" onClick={search}>
            This Button Does Nothin'
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
