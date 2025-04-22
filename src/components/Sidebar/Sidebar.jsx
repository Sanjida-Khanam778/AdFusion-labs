import React from "react"
import { useState } from "react"
import { Search, MoreHorizontal, MessageSquare } from "lucide-react"

const ChatItem = ({ color, text }) => {
  return (
    <div className="flex items-center p-3 mb-2 bg-[#2a2a2a] rounded-lg relative">
      {/* Colored indicator */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg ${color}`}></div>

      {/* Chat icon */}
      <div className="ml-2 mr-3">
        <MessageSquare size={18} className="text-white" />
      </div>

      {/* Chat text */}
      <div className="flex-1 text-sm text-white truncate">{text}</div>

      {/* More options */}
      <button className="text-gray-400 hover:text-white">
        <MoreHorizontal size={18} />
      </button>
    </div>
  )
}

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const recentChats = [
    { id: 1, color: "bg-green-500", text: "How can I increase the..." },
    { id: 2, color: "bg-gray-500", text: "How can I increase the..." },
    { id: 3, color: "bg-blue-500", text: "How can I increase the..." },
    { id: 4, color: "bg-pink-500", text: "How can I increase the..." },
  ]

  return (
    <div className="flex flex-col h-screen w-72 bg-[#1a1a1a] p-4">
      {/* Search bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          className="bg-[#2a2a2a] text-white w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Recent chats section */}
      <div className="mb-3">
        <h2 className="text-white text-sm font-medium mb-3">Recent Chats</h2>
        <div className="space-y-1">
          {recentChats.map((chat) => (
            <ChatItem key={chat.id} color={chat.color} text={chat.text} />
          ))}
        </div>
      </div>

      {/* Spacer to push content to top and bottom */}
      <div className="flex-grow"></div>

      {/* Upgrade plan card */}
      <div className="bg-blue-600 rounded-lg p-4 mb-4 text-center">
        <h3 className="text-white font-bold text-lg mb-1">Update Your Plan</h3>
        <p className="text-white text-sm mb-3">Unlock powerful features with our pro upgrade today!</p>
        <button className="bg-white text-blue-600 font-medium py-2 px-6 rounded-lg w-full hover:bg-gray-100 transition-colors">
          Update
        </button>
      </div>

      {/* User profile */}
      <div className="flex items-center bg-[#1a1a1a] py-2">
        <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="ml-3 text-white text-sm font-medium">Farhan Israk</span>
        <button className="ml-auto text-gray-400 hover:text-white">
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  )
}

export default Sidebar