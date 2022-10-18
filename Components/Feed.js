import React from 'react'
import Navbar from "./Navbar"
import Upload from './Upload'
export default function Feed() {
  return (
    <div className='feed-container'>
      <Navbar/>
    <Upload/>
    <div className='videos-container'>
      <div className='post-container'>
        <video/>      
        </div>
        <div className='post-container'>
        <video/>      
        </div>
        <div className='post-container'>
        <video/>      
        </div>
    </div>
    </div>
  )
}