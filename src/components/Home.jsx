import React from 'react'
import Feed from './feed'
import { Outlet } from 'react-router-dom'
import RightSideBar from './ui/RightSideBar'
import useGetAllPost from '@/hooks/useGetAllPost'
import useGetSuggestedUsers from '@/hooks/useGetSuggestedUsers'

const Home = () => {
  useGetAllPost();
  useGetSuggestedUsers();
  return (
    <div className='flex'>
      <div className="flex-grow">
        <Feed/>
        <Outlet/>
      </div>
      <RightSideBar/>
    </div>
  )
}

export default Home