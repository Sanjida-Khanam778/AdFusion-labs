import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import ChatInterface from '../components/ChatInterface/ChatInterface'

export default function Dashboard() {
  return (
    <div className='flex'>
        <Sidebar />
        <ChatInterface />
        
    </div>
  )
}
