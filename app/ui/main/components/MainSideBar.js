import Button from '@/app/components/Button'
import { trendingTags } from '@/constants/data/tags'
import React from 'react'

const MainSideBar = () => {
  return (
    <div className='w-100 space-y-3'>
         <h4 className="text-gray-900 dark:text-gray-50 text-[22px]">Newsletter</h4>
        <div className="flex">
          <input
            type="text"
            className="outline-none focus:outline-none  placeholder:text-md border border-gray-20 px-2 py-3 rounded-tl-md rounded-bl-md"
            placeholder="Enter your email"
          />
          <button className="text-center px-5 py-3 bg-gray-400 text-white rounded-tr-md rounded-br-md">
          Subscribe
          </button>
        </div>
         <h4 className="text-gray-900 dark:text-gray-50 text-[22px]">Trending</h4>
         <div className="grid grid-cols-2 gap-5">
          {trendingTags.map((tags, index) => (
            <Button
              variant={"ghost"}
              size={"tags"}
              key={index}
            >
              {tags}
            </Button>
          ))}
        </div>
    </div>
  )
}

export default MainSideBar