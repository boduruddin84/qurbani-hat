"use client";
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import { IoMenu } from "react-icons/io5";


const Navbar = () => {

  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        
        <Link href="/" className="flex justify-between p-4">
          <h1 className="flex justify-center items-center gap-2 text-xl font-bold text-green-600">
            <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          /> <span className="hidden md:flex">QurbaniHat</span></h1>

          <button onClick={() => setOpen(!open)} className="m-2 md:hidden">
          <IoMenu />
        </button>
        </Link>

        
        <div className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/animals">All Animals</Link>
        </div>

        {open && (
        <div className="flex flex-col p-4 gap-3 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/animals">All Animals</Link>
        </div>
      )}

        
        <div>
          
            <div className="flex gap-2">
              <Link href="/login" className="btn btn-sm">Login</Link>
              <Link href="/register" className="btn btn-sm btn-success">
                Register
              </Link>
            </div>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar