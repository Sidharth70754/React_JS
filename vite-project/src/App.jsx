"use client"
import React, { useState } from 'react'
import Header from '../Components/Header'


export default function App() {
  const [user , setUser] = useState("sidharth")
  return(
  <>
    <div>App</div>
    <div className='h-8 bg-green-500 flex items-center justify-between'>
        <h2>LOGO</h2>
        <div className='flex gap-4'>
            <h4>About</h4>
            <h5>Carrer</h5>
            <h6>Blog</h6>
            <h6>Account</h6>
            {user}
        </div>
    </div>
    
  </>
  )
}

