import React from 'react'
import { FaCode, FaWandMagicSparkles, FaComments, FaGlobe } from 'react-icons/fa6'

const Sidebar = () => {
  return (
    <div className='w-72 h-screen bg-slate-900 text-white flex flex-col items-center py-6 shadow-lg'>
      {/* Header */}
      <div className='text-3xl font-extrabold text-amber-500 mb-10 tracking-wide'>
        WorkFlow
      </div>

      {/* Navigation Items */}
      <div className='w-full flex flex-col gap-3 px-6'>
        <SidebarItem icon={<FaCode />} label="Code Write Agent" />
        <SidebarItem icon={<FaWandMagicSparkles />} label="Classify Code" />
        <SidebarItem icon={<FaComments />} label="General Talk" />
        <SidebarItem icon={<FaGlobe />} label="Website Crawler" />
      </div>

      {/* Spacer & Footer */}
      <div className='flex-grow'></div>
      <div className='text-sm text-gray-500 mb-4'>Powered by GPT</div>
    </div>
  )
}

const SidebarItem = ({ icon, label }) => (
  <div className='flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-amber-500 hover:text-slate-900 transition duration-200'>
    <div className='text-lg'>{icon}</div>
    <span className='font-medium'>{label}</span>
  </div>
)

export default Sidebar
