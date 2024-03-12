import { Menu } from 'lucide-react'
import React from 'react'

const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className='flex gap-4 items-center flex-shrink-0'>
        <button>
          <Menu />
        </button>
        <a href="/">
          <h1 className='h-6'>YouTube Clone</h1>
        </a>
      </div>
    </div>
  )
}

export default PageHeader