"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [open, setOpen] = useState(false);

  const handleLogOut = async () => {
    await authClient.signOut();
  }

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
              />
              <span className="hidden md:flex">QurbaniHat</span>
            </h1>

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
            {user ? (
              <div className="flex items-center gap-3">
                <Avatar>
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <Link href="/my-profile">Profile</Link>
                <Button onClick={handleLogOut} variant="danger">LogOut</Button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link href="/login" >
                  <Button className="btn btn-sm">Login</Button>
                </Link>
                <Link href="/register" >
                  <Button className="btn btn-sm btn-success">Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
