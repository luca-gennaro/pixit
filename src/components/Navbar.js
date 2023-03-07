import React, { useContext } from 'react'
import {InputContext} from "../Context/Context"

const Navbar = ({canvasRef}) => {

 const {width, setWidth, height, setHeight} = useContext(InputContext)

 const clearCanvas = () => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  for (let x = 0; x <= canvas.width; x += width) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
  }
  for (let y = 0; y <= canvas.height; y += height) {
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
  }
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = "#CCCCCC";
  ctx.stroke();
 }

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
        <button onClick={() => clearCanvas()} className='bg-slate-200 px-4 py-2 rounded-md hover:bg-black hover:text-white'>Reset</button>
    </div>
  )
}

export default Navbar