import { forwardRef } from 'react'
import Link from 'next/link'

import { Feather, Home } from '@/icons'
import Heading from '@/components/Heading'
import Image from 'next/image';

interface ISidebar {
  collapsed: boolean
}

const Sidebar = forwardRef(
  ({ collapsed }: ISidebar, sidebarRef: React.Ref<HTMLElement>) => (
    <nav
      ref={sidebarRef}
      className={`min-h-screen w-64 border-r border-gray-200 bg-white px-5 py-7 dark:border-gray-700 dark:bg-gray-800 ${
        collapsed ? 'ml-0 sm:-ml-64' : '-ml-64 sm:ml-0'
      } transition-spacing duration-300 ease-in-out motion-reduce:transition-none sm:duration-500`}
    >
      <Link href='/dashboard' aria-label='Go to the dashboard' passHref>
        <div className='flex items-center justify-center space-x-3'>
        <Image 
          src="/android-chrome-512x512.png" 
          alt="logo" 
          width={512} // Specify a numeric width
          height={512} // Specify a numeric height
          layout="responsive" // You can also use "responsive" based on your needs
        />
          <Heading tag='h2'>Gather Guide</Heading>
        </div>
      </Link>

      <div
        className='mt-12'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
      >
        <div role='none'>
          <Link
            href='/dashboard'
            className='flex items-center space-x-4 px-3 py-2 text-lg hover:opacity-75'
            role='menuitem'
            passHref
          >
            <Home width={20} height={20} />
            <span>Home</span>
          </Link>
          <Link
            href='/dashboard'
            className='flex items-center space-x-4 px-3 py-2 text-lg hover:opacity-75'
            role='menuitem'
            passHref
          >
            <i className="pi pi-users" style={{ color: '#708090' }}></i>
            <span>Home</span>
          </Link>
        </div>
      </div>
    </nav>
  )
)

Sidebar.displayName = 'Sidebar'

export default Sidebar
