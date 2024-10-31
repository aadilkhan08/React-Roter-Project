import React from 'react'
import { useParams } from 'react-router-dom'

function User () {
  const { id } = useParams()
    return (
        <div className='w-full min-h-20 text-3xl bg-gray-700 text-white flex items-center justify-center flex-wrap'>User: { id}</div>
  )
}

export default User
