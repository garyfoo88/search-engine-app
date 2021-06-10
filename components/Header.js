import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="/header-logo.png"
          width={120}
          height={75}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="search-header flex-grow">
          <input defaultValue={router.query.term} type="text" ref={searchInputRef} className="header-input" />
          <XIcon
            className="header-logo sm:m-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="header-micro" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={(e) => search(e)}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto" url="./profilepic.png" />

        
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
