"use client";

import Link from 'next/link';
import Container from './Container';
import { useState } from 'react';
import { useUser, SignOutButton } from "@clerk/nextjs";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoaded, isSignedIn } = useUser();

  return (
    <header className="bg-white/90 backdrop-blur-lg fixed w-full z-50 border-b border-gray-100/50 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            FullRide
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/universities"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 border-2 border-gray-100 rounded-full px-4 py-2 hover:border-gray-200"
            >
              Университеты
            </Link>
            <Link
              href="/success-stories"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 border-2 border-gray-100 rounded-full px-4 py-2 hover:border-gray-200"
            >
              Успешные истории
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 border-2 border-gray-100 rounded-full px-4 py-2 hover:border-gray-200"
            >
              Моя заявка
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoaded && (
              isSignedIn ? (
                <SignOutButton>
                  <button className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 border-2 border-gray-200 rounded-full px-6 py-2 hover:border-gray-300">
                    Выйти
                  </button>
                </SignOutButton>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 border-2 border-gray-200 rounded-full px-6 py-2 hover:border-gray-300"
                  >
                    Войти
                  </Link>
                  <Link
                    href="/sign-up"
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                      Регистрация
                    </div>
                  </Link>
                </>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="py-4 space-y-4">
            <Link
              href="/universities"
              className="block text-gray-600 hover:text-gray-900 transition-all duration-300 border-2 border-gray-100 rounded-full px-4 py-2 hover:border-gray-200"
            >
              Университеты
            </Link>
            <Link
              href="/success-stories"
              className="block text-gray-600 hover:text-gray-900 transition-all duration-300 border-2 border-gray-100 rounded-full px-4 py-2 hover:border-gray-200"
            >
              Успешные истории
            </Link>
            <Link
              href="/dashboard"
              className="block text-gray-600 hover:text-gray-900 transition-all duration-300 border-2 border-gray-100 rounded-full px-4 py-2 hover:border-gray-200"
            >
              Моя заявка
            </Link>
            <div className="pt-4 space-y-4 border-t border-gray-100">
              {isLoaded && (
                isSignedIn ? (
                  <SignOutButton>
                    <button className="w-full text-gray-600 hover:text-gray-900 transition-all duration-300 border-2 border-gray-200 rounded-full px-6 py-2 hover:border-gray-300 text-center">
                      Выйти
                    </button>
                  </SignOutButton>
                ) : (
                  <>
                    <Link
                      href="/sign-in"
                      className="block text-gray-600 hover:text-gray-900 transition-all duration-300 border-2 border-gray-200 rounded-full px-6 py-2 hover:border-gray-300 text-center"
                    >
                      Войти
                    </Link>
                    <Link
                      href="/sign-up"
                      className="relative group block"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center">
                        Регистрация
                      </div>
                    </Link>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
} 