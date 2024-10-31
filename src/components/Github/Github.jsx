import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github () {
  const data = useLoaderData()
  return (
    <div className='flex flex-wrap justify-center flex-col  items-center w-full h-min p-7'>
      <img src={data.avatar_url} alt='github_profile_image' className='w-96' />
      <div>
        <h1 className='m-3 text-center text-md md:text-lg lg:text-2xl xl:text-4xl '>
          {data.name}
        </h1>
      </div>
      <div className='text-center text-md md:text-lg lg:text-2xl xl:text-3xl '>
        Github Followers: {data.followers}
      </div>
    </div>
  )
}

export default Github

export const githubLoader = async () => {
  const response = await fetch(`https://api.github.com/users/aadilkhan08`)
  return response.json()
}
