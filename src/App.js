import React, { useRef, useState } from 'react'
import Canvas from './components/Canvas'
import ColorPalette from './components/ColorPalette'
import Navbar from './components/Navbar'
import colors from "./data.json"
import { InputContext } from './Context/Context'

const App = () => {

  const [width, setWidth] = useState(10)
  const [height, setHeight] = useState(10)
  const [color, setColor] = useState("#000000")
  const canvasRef = useRef(null);

  return (
    <InputContext.Provider value={{width, setWidth, height, setHeight, color, setColor, canvasRef}}>
      <div className='flex flex-col h-[100vh] bg-gradient-to-b from-slate-200 to-white'>
        <Navbar canvasRef={canvasRef}/>
        <ColorPalette colors={colors}/>
        <Canvas />
      </div>
    </InputContext.Provider>
  )
}

export default App