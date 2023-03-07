import React, { useState, useEffect, useContext } from "react";
import { InputContext } from "../Context/Context";

const Canvas = () => {
  const [isMouseDown, setIsMouseDown] = useState(false)
  const { width, height, color, canvasRef } = useContext(InputContext)


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Disegna la griglia
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
  }, [width, height, canvasRef]);

  const handleMouseDown = (event) => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    setIsMouseDown(true)

    ctx.fillStyle = color;
    ctx.fillRect(
      Math.floor(event.nativeEvent.offsetX / width) * width,
      Math.floor(event.nativeEvent.offsetY / height) * height,
      width,
      height
    );
  };

  const handleMouseMove = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (isMouseDown) {
      ctx.fillStyle = color;
      ctx.fillRect(
        Math.floor(event.nativeEvent.offsetX / width) * width,
        Math.floor(event.nativeEvent.offsetY / height) * height,
        width,
        height
      );
    }


  };

  const handleMouseUp = () => {

    setIsMouseDown(false)
  };

  const handleSaveImage = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "pixit.png";
    link.href = image;
    link.click();
  };

  return (
    <div className="flex flex-col items-center">
      <canvas
        ref={canvasRef}
        width="1350"
        height="500"
        className="border-2 border-black mt-4"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>
      <button onClick={handleSaveImage} className="bg-slate-200 px-4 py-2 rounded-md mt-2 hover:bg-black hover:text-white">Download Image</button>
    </div>
  )
}

export default Canvas;

