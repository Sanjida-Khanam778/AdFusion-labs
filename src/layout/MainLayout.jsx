import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function MainLayout() {
  return (
    <div className='bg-[#0f172a] text-white'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}
