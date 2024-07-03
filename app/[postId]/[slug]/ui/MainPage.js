"use client"
import React, { useEffect } from 'react'

const FullNewsPage = ({post}) => {
    useEffect(()=>{
        console.log(post)
    }, [post])
  return (
    <div>FullNewsPage</div>
  )
}

export default FullNewsPage