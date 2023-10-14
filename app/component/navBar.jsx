"use client"
import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Cart } from '@/context/context'
import Link from 'next/link'

const navigation = [
  { name: 'اتصل بنا', href: '/contact', current: true },
  { name: 'المجله السياحيه', href: '/blogs', current: false },
  { name: 'خدماتنا', href: '/services', current: false },
  { name: 'البرامج السياحيه', href: '/programs', current: false },
  { name: 'من نحن', href: '/about', current: false },
  { name: 'الرئيسيه', href: '/', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const {numOfItems}= useContext(Cart)
  return (
    <Disclosure as="nav" className="bg-gray-200 w-full fixed z-20 w-full">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-[#47b6c7] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-16 w-auto"
                  src="/home/logo.png"
                  alt="dailtravel"
                />
              </div>
              <div className="hidden w-full sm:ml-6 sm:block sm:flex absolute justify-center">
                <div className="flex space-x-4 items-center py-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'main-bg text-white' : 'text-gray-800 hover:bg-[#47b6c7] hover:text-white',
                        'rounded px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-12 sm:pr-0">
              <Link
                href={'/cart'}
                type="button"
                className="relative rounded-full p-1 text-gray-800 "
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View Products</span>
                <span className={`${numOfItems ? "absolute top-0 right-0 rounded-full main-bg text-white flex items-center justify-center w-4 h-4":"hidden"}`}>{numOfItems}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'main-bg text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
            
          </div>
          
        </Disclosure.Panel>
    
      </>
      
    )}
  </Disclosure>   
  )
}