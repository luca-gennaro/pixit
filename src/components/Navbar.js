import React, { useContext } from 'react'
import {InputContext} from "../Context/Context"

const Navbar = ({onReset}) => {

 const {width, setWidth, height, setHeight} = useContext(InputContext)

  const handleWidthChange = (e) => {
    setWidth(parseInt(e.target.value))
    
  }

  const handleHeightChange = (e) => {
    setHeight(parseInt(e.target.value))
  }

  return (
    <div className='flex justify-between items-center py-3 px-6 bg-white'>
        <h1 className='font-bold text-2xl'>Pixit</h1>
        <div className='flex justify-between gap-4'>
            <label htmlFor="width">Width:</label>
            <input type="number" id='width' value={width} onChange={handleWidthChange} className='border-solid border-2 rounded-md w-14 text-center'/>
            <label htmlFor="height">Height:</label>
            <input type="number" id='height' value={height} onChange={handleHeightChange} className='border-solid border-2 rounded-md w-14 text-center'/>
        </div>
        <button onClick={() => window.location.reload()} className='bg-slate-200 px-4 py-2 rounded-md hover:bg-black hover:text-white'>Reset</button>
    </div>
  )
}

export default Navbar