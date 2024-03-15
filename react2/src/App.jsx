"use client"

import axios from "axios";
import React, { useState } from "react";
import Link from 'next/link'

const page = () => {
  const [user, setusers] = useState([])
  const getUsers = async () => {
    const { data } = await axios.get("")
    setusers(data)
  }

  return (
    <>
    <button onClick={getUsers} className="bg bg-green-500 text-white px-4 py-2 rounded-full">
      Get Users</button>
    <div className="p-8 bg-slate-100 mt-5">
      <ul>
        {user.map((e) =>{
          
        }
        )}
      </ul>
    </div>
    </>
  )
}