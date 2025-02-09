import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.jpg";
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="border-b">
      <div className="felx flex-col  lg:flex-row items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
          <div className="lg:hidden">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transtion border border-gray-300">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
        <div className="w-full lg-max-w-2xl ">
          <SearchBar />
        </div>
        {/*large menu*/}
        <div className="lg:flex hidden gap-4 ml-auto">
          <SignedIn>
            <div>
              <Link href="/seller">
                <button className="bg-blue-600 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 text-white">
                  Sell Tickets
                </button>
              </Link>
              <Link href="/seller">
                <button className="bg-blue-600 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 text-white">
                  My Tickets
                </button>
              </Link>
            </div>
          </SignedIn>
        </div>

        {/*Moblie menu*/}

        <div className="lg:hidden w-full flex justify-center gap-3">
          <SignedIn>
            <Link href="/seller" className="flex-1">
              <button
                className="  bg-blue-600 w-full px-3 py-1.5
         rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200  
          text-white"
              >
                Sell Tickets
              </button>
            </Link>
            <Link href="/seller" className="flex-1">
              <button
                className="  bg-gray-100 w-full px-3 py-1.5
         rounded-lg text-sm font-medium hover:bg-gray-200 text-gray-800 transition-colors duration-200  
          border border-gray-300 "
              >
                My Tickets
              </button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
