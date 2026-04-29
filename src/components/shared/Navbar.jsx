"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-green-600">
          🐄 QurbaniHat
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/animals">All Animals</Link>
        </div>

        {/* Auth */}
        <div>
          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={user.photoURL}
                className="w-8 h-8 rounded-full"
              />
              <Link href="/my-profile">Profile</Link>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/login" className="btn btn-sm">Login</Link>
              <Link href="/register" className="btn btn-sm btn-success">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}