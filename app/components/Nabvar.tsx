'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Practice', href: '/practice' },
        { name: 'Media', href: '/media' },
    ];

    return (
        <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-cream shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    {/* Logo Section */}
                    <Link href="/" className="flex flex-row">
                        <div className='logo flex items-center justify-center text-deep-blue bg-linear-to-r from-saffron to-orange-600 font-bold p-1 h-10 w-10 mr-1 rounded-md'>DM</div>

                        <div className="flex flex-col group">
                            <span className="text-deep-blue font-bold text-2xl tracking-tighter group-hover:text-saffron transition-colors">
                                DEVATMA
                            </span>
                            <span className="text-saffron text-[10px] font-medium tracking-[0.2em] uppercase -mt-1">
                                Meditation
                            </span>
                        </div>

                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-semibold transition-all hover:text-saffron ${isActive ? 'text-saffron border-b-2 border-saffron' : 'text-slate-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <button className="bg-deep-blue text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-saffron transition-all transform hover:scale-105">
                            Join Live
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-deep-blue p-2 focus:outline-none"
                        >
                            <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-cream animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-saffron hover:bg-cream rounded-lg"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="w-full mt-4 bg-saffron text-white py-3 rounded-lg font-bold">
                            Join Live Projection
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;