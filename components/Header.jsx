import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { UserButton, useSession } from '@clerk/nextjs'
import { Bike } from 'lucide-react'

const Header = () => {
  const { session } = useSession();
  return <>
    <header className="bg-white z-50 top-0 sticky border-b">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="flex justify-center items-center gap-1 text-primary font-bold text-2xl shadow p-2 shadow-primary rounded" href="/">
              <Bike size={32} />
              Cycle Hive Rentals
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            {/* <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-md ">
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
                </li>
              </ul>
            </nav> */}

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {
                  session ? (
                    <>
                      <div className="flex gap-4 items-center">
                        <Link href={'/dashboard'}>
                          <Button>
                            Admin Panel
                          </Button>
                        </Link>
                        <UserButton />
                      </div>
                    </>
                  ) : (
                    <>
                      <Link href={'/dashboard'}>
                        <Button>
                          Login
                        </Button>
                      </Link>
                      <Link href={'/dashboard'}>
                        <Button variant='secondary'>
                          Register
                        </Button>
                      </Link>
                    </>
                  )
                }
              </div>
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
}

export default Header