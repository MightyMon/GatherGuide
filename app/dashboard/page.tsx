import Link from 'next/link'
import { Metadata } from 'next'

import Heading from '@/components/Heading'

export const metadata: Metadata = {
  title: 'Plume - Home'
}

const Page = () => (
  <>
    <Heading tag='h1' className='pb-4'>
      Home
    </Heading>  
    <div className='w-full rounded border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
      <div className='flex flex-col gap-8'>
        <Plume />
        <Sitemap />
        <Features />
        <License />
      </div>
    </div>
  </>
)

const Plume = () => (
  <div>
    <Heading tag='h2'>Your Gather Guide</Heading>
    <p>Dashboard template made using Next.js + Tailwind CSS + TypeScript.</p>
    <a
      className='text-violet-600 hover:opacity-75 dark:text-violet-400'
      href='https://github.com/brenobaptista/plume-dashboard'
      target='_blank'
      rel='noreferrer noopener'
    >
      Source code
    </a>
  </div>
)

const Sitemap = () => (
  <div>
    <Heading tag='h2'>Sitemap</Heading>
    <ul>
      <li>
        <Link
          href='/dashboard'
          className='text-violet-600 hover:opacity-75 dark:text-violet-400'
          passHref
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href='/dashboard/profile'
          className='text-violet-600 hover:opacity-75 dark:text-violet-400'
          passHref
        >
          Profile
        </Link>
      </li>
      <li>
        <Link
          href='/auth/reset-password'
          className='text-violet-600 hover:opacity-75 dark:text-violet-400'
          passHref
        >
          Reset password
        </Link>
      </li>
      <li>
        <Link
          href='/auth/sign-in'
          className='text-violet-600 hover:opacity-75 dark:text-violet-400'
          passHref
        >
          Sign in
        </Link>
      </li>
      <li>
        <Link
          href='/auth/sign-up'
          className='text-violet-600 hover:opacity-75 dark:text-violet-400'
          passHref
        >
          Sign up
        </Link>
      </li>
    </ul>
  </div>
)

const Features = () => (
  <div>
    <Heading tag='h2'>Features</Heading>
    <ul>
      <li>Next.js</li>
      <li>Tailwind CSS</li>
      <li>Dark theme support</li>
      <li>TypeScript</li>
      <li>ESLint + Prettier + Husky + Lint Staged</li>
    </ul>
  </div>
)

const License = () => (
  <div>
    <Heading tag='h2'>License</Heading>
    <p>
      This project is licensed under the{' '}
      <a
        className='text-violet-600 hover:opacity-75 dark:text-violet-400'
        href='https://github.com/brenobaptista/plume-dashboard/blob/main/LICENSE'
        target='_blank'
        rel='noreferrer noopener'
      >
        MIT License
      </a>
    </p>
  </div>
)

export default Page
