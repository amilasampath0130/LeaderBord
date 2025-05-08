'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiSearch, FiMessageSquare, FiUser } from 'react-icons/fi';
import { BasicNavTabs } from '../_config/nav_config';
import { UserButton } from '@/app/components/ui/(signoutFunction)/UserButton';
import { SessionProvider } from 'next-auth/react';


export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Desktop Nav */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white text-xl font-bold">
                MyApp
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                {BasicNavTabs.map((tab) => (
                  <Link
                    key={tab.path}
                    href={tab.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname === tab.path
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {tab.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Middle - Search Bar (Desktop) */}
          <div className="hidden md:block mx-4 flex-1 max-w-md">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Right side - Icons and Mobile Menu Button */}
          <div className="flex items-center">
            {/* Icons (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-gray-700 focus:outline-none">
                <FiMessageSquare className="h-6 w-6" />
              </button>
              <button className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-gray-700 focus:outline-none">
                      <SessionProvider>
                        <UserButton />
                      </SessionProvider>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-4 flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                <svg
                  className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Mobile Search */}
          <div className="relative mb-4 mx-2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Mobile Nav Items */}
          {BasicNavTabs.map((tab) => (
            <Link
              key={tab.path}
              href={tab.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === tab.path
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {tab.name}
            </Link>
          ))}
          
          {/* Mobile Icons */}
          <div className="pt-4 pb-3 border-t border-gray-700 flex justify-around">
            <button className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none">
              <FiMessageSquare className="h-6 w-6" />
            </button>
            <button className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none">
              <FiUser className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}