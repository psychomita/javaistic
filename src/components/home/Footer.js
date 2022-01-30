import { Logo } from '@/components/Logo'
import { Vercel } from '@/components/Vercel'
import { documentationNav } from '@/navs/documentation'
import { programsNav } from '@/navs/program'
import clsx from 'clsx'
import Link from 'next/link'
import styles from './Footer.module.css'

const GitHub = () => (
  <svg
    fill="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="h-8 w-8 p-1 sm:p-1 lg:p-0"
    viewBox="0 0 35 35"
  >
    <path d="M16.3 0C7.3 0 0 7.3 0 16.3c0 7.2 4.7 13.3 11.1 15.5.8.1 1.1-.4 1.1-.8v-2.8c-4.5 1-5.5-2.2-5.5-2.2-.7-1.9-1.8-2.4-1.8-2.4-1.5-1 .1-1 .1-1 1.6.1 2.5 1.7 2.5 1.7 1.5 2.5 3.8 1.8 4.7 1.4.1-1.1.6-1.8 1-2.2-3.6-.4-7.4-1.8-7.4-8.1 0-1.8.6-3.2 1.7-4.4-.1-.3-.7-2 .2-4.2 0 0 1.4-.4 4.5 1.7 1.3-.4 2.7-.5 4.1-.5 1.4 0 2.8.2 4.1.5 3.1-2.1 4.5-1.7 4.5-1.7.9 2.2.3 3.9.2 4.3 1 1.1 1.7 2.6 1.7 4.4 0 6.3-3.8 7.6-7.4 8 .6.5 1.1 1.5 1.1 3V31c0 .4.3.9 1.1.8 6.5-2.2 11.1-8.3 11.1-15.5C32.6 7.3 25.3 0 16.3 0z" />
  </svg>
)

const Twitter = () => (
  <svg
    fill="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="h-8 w-8 p-1 sm:p-1 lg:p-0"
    viewBox="0 0 24 24"
  >
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
  </svg>
)

const footerNav = {
  'Getting started': {
    className: 'row-span-2',
    items: documentationNav['Getting started'],
  },
  Programming: {
    className: 'row-span-2',
    items: programsNav['Getting started'],
  },
  Product: {
    className: 'row-span-2',
    items: [
      { title: 'Home', href: '/' },
      { title: 'Java Docs', href: '/docs' },
      { title: 'Java Programs', href: '/programs' },
      { title: 'About', href: '/' },
      { title: 'Contact', href: 'mailto:javaistic@gmail.com' },
    ],
  },
  Others: {
    className: 'row-span-2',
    items: [
      { title: 'Brand', href: '/brand' },
      { title: 'Sponsors', href: '/sponsors' },
      { title: 'Changelog', href: 'https://javaistic-changelog.vercel.app/' },
      { title: 'Open Source', href: '/' },
    ],
  },
  Community: {
    items: [
      { title: 'GitHub', href: 'https://github.com/javaistic/javaistic' },
      { title: 'Discord', href: '/discord' },
      { title: 'Twitter', href: 'https://twitter.com/javaistic' },
      { title: 'Blog', href: '/' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-10 dark:bg-gray-800 sm:pt-20 sm:pb-10 md:pt-24 xl:pt-28">
      <div className="mx-auto max-w-screen-lg divide-y divide-gray-200 px-4 dark:divide-gray-600 sm:px-6 md:px-8 xl:max-w-screen-xl">
        <ul
          className={`${styles.nav} grid grid-cols-2 gap-4 gap-y-10 pb-14 text-sm font-medium sm:grid-cols-2 sm:pb-20 md:grid-cols-3 lg:grid-cols-5`}
        >
          {Object.keys(footerNav).map((section, i) => (
            <li key={section} className={clsx('space-y-5', footerNav[section].className)}>
              <h2 className="text-base font-bold uppercase tracking-wide text-gray-900 dark:text-white">
                {section}
              </h2>
              <ul className="space-y-4">
                {footerNav[section].items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <a className="text-gray-400 transition duration-200 ease-in-out hover:text-gray-900 dark:hover:text-white">
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="container mx-auto flex flex-col items-center px-5 py-8 pb-8 sm:flex-row">
          <a
            href="#"
            className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
          >
            <Logo className="h-10 w-auto text-black dark:text-white" />
          </a>
          <div className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-r-2 sm:border-gray-200 sm:py-2 sm:pl-4 sm:pr-4 sm:dark:border-gray-600">
            <div className="flex">
              <a href="https://github.com/uiuxarghya" target="_blank" rel="noopener noreferrer">
                <p className="text flex text-base text-gray-500 dark:text-gray-200">
                  by&nbsp;
                  <span className="text-base font-bold text-gray-800 dark:text-white">
                    @uiuxarghya
                  </span>
                </p>
              </a>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500 sm:mt-0 sm:border-gray-200 sm:py-2 sm:pl-4 sm:dark:border-gray-600">
            <div className="flex">
              <a
                href="https://vercel.com/?utm_source=javaistic&utm_campaign=oss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text flex text-sm text-gray-500 dark:text-gray-200">
                  Powered by
                  <Vercel className="ml-1 flex h-5 w-auto text-black dark:text-white" />
                </p>
              </a>
            </div>
          </div>

          <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              href="https://github.com/javaistic/javaistic"
              className="ml-3 text-gray-500 transition duration-200 ease-in-out hover:text-black dark:hover:text-white"
            >
              <GitHub />
            </a>
            <a
              href="https://twitter.com/javaistic"
              className="ml-3 text-gray-500 hover:text-blue-500"
            >
              <Twitter />
            </a>
          </span>
        </div>
        <div className="container mx-auto mb-0 flex flex-col items-center px-5 py-2 sm:flex-row">
          <div className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <p className="mt-2 text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Javaistic. All rights reserved.
            </p>
          </div>
          <a
            href="#"
            className="title-font flex items-center justify-center pl-6 font-medium text-gray-900 md:justify-start"
          >
            <p className="mt-2 text-sm text-gray-500">Privacy Policy</p>
          </a>
          <a
            href="#"
            className="title-font flex items-center justify-center pl-6 font-medium text-gray-900 md:justify-start"
          >
            <p className="mt-2 text-sm text-gray-500">Terms &amp; Conditions</p>
          </a>
          <a
            href="https://javaistic.betteruptime.com"
            className="title-font flex items-center justify-center pl-6 font-medium text-gray-900 md:justify-start"
          >
            <p className="mt-2 text-sm text-gray-500 hover:text-black dark:hover:text-white">
              Status
            </p>
          </a>
          <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start"></span>
        </div>
      </div>
    </footer>
  )
}
