import React, { useContext, useState } from 'react'
import { InputContext } from '../Context/Context'

const ColorPalette = ({colors}) => {

  const {setColor} = useContext(InputContext)

  return (
    <div className='flex items-center justify-center gap-1 p-4 mx-20 bg-white mt-4 rounded-lg flex-wrap'>
        {colors.map((color, index) => (
          <button key={index} 
          className="w-6 h-6 rounded-sm border-solid border-[2px] border-gray-200 focus:border-blue-400"
          style={{background: color}}
          onClick={() => setColor(color)}
          ></button>
        ))}
    </div>
  )
}

export default ColorPalette

