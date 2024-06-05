import React from 'react'

const AvatarCon = ({img}) => {
  return (
    <div className='con rounded-full w-12 h-12 relative overflow-hidden border bg-black border-black cursor-pointer flex items-center justify-center hover:ring-2 duration-300'>
        <img className=' object-contain' src={img} alt='pfp'/>
    </div>
  )
}

export default AvatarCon;