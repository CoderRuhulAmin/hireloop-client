"use client";

// import { signOut, useSession } from "@/lib/auth-client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Bars, Xmark } from '@gravity-ui/icons';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const {data: session, isPending} = useSession();
    // console.log({session, isPending});
    // const user = session?.user;
    // console.log({user});

    const user = {
        name: "Ruhul Amin",
    }
    // const user = ""

    const handleSignOut = async () => {
        await signOut({ callbackUrl: "/" });
    }

    const navLinks = [
        { label: "Browse Jobs", href: "/jobs" },
        { label: "Company", href: "/company" },
        { label: "Pricing", href: "/pricing" },
    ]

    const navItems = <>
        {
            navLinks.map((link) => (
                <li key={link.href}>
                    <Link
                        href={link.href}
                        className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
                    >
                        {link.label}
                    </Link>
                </li>
            ))
        }
    </>

    return (
        <nav className="navbar">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-blue-400 shadow-lg">
                        <span className="text-xl font-bold text-white">H</span>
                    </div>

                    <div className="hidden leading-none sm:block">
                        <Image
                            src={`/images/logo.png`}
                            alt="Hire Loop"
                            width={120}
                            height={60}
                            className="h-auto w-auto"
                        />
                    </div>
                </Link>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5">
                    {/* Desktop Menu */}
                    <div className="hidden items-center gap-6 md:flex">
                        {/* Nav Links */}
                        <ul className="flex items-center gap-1 px-3">
                            {navItems}
                        </ul>

                        {/* Vertical Divider */}
                        <div className="h-6 w-px bg-white/20" />

                        {/* Auth Links */}
                        <div className="flex items-center gap-4 text-white">
                            {
                                user ?
                                    <>
                                        Hi, <span className="hidden lg:block">{user.name}!</span>
                                        <Button
                                            onClick={handleSignOut}
                                            variant="danger">
                                            Sign Out
                                        </Button>
                                    </>
                                    :
                                    <Link href="/auth/signin" >
                                        <Button className="text-sm font-medium bg-linear-to-br from-blue-600 to-blue-400 transition hover:text-violet-300">
                                            Sign In
                                        </Button>
                                    </Link>
                            }

                            <Button
                                as={Link}
                                href="/register"
                                radius="lg"
                                className="h-11 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-200 hidden lg:block"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
                        aria-label="Toggle Menu"
                    >
                        {
                            isMenuOpen ? <Xmark /> : <Bars />
                        }
                    </button>
                </div>
            </div>


            {/* MOBILE MENU */}
            {isMenuOpen && (
                <div className="border-t border-white/10 md:hidden">
                    <div className="space-y-3 px-4 py-6">
                        {/* Nav Links */}
                        <ul className="space-y-3">
                            {navItems}
                        </ul>

                        {/* Divider */}
                        <div className="border-t border-white/10 pt-4">
                            <div className="flex flex-col gap-3">
                                {
                                    user ?
                                        <>
                                            <span className="text-white">Hi, <span>{user.name}!</span></span>
                                            <Button
                                                onClick={handleSignOut}
                                                variant="danger">
                                                Sign Out
                                            </Button>
                                        </>
                                        :
                                        <Link
                                            href="/auth/signin"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <Button className="text-sm font-medium bg-linear-to-br from-blue-600 to-blue-400 transition hover:text-violet-300">
                                                Sign In
                                            </Button>
                                        </Link>
                                }

                                <Button
                                    as={Link}
                                    href="/register"
                                    className="bg-white font-semibold text-black"
                                    radius="lg"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;