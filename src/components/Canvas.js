import React, { useEffect, useRef } from "react";


function Canvas({ configuration, previousConfiguration }) {

    const canvasRef = useRef("canvas")

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        context.fillStyle = '#FFFFFF'
        previousConfiguration.forEach(cell => context.fillRect(cell.x, cell.y, 1, 1))

        context.fillStyle = '#000000'
        configuration.forEach(cell => context.fillRect(cell.x, cell.y, 1, 1))
    }, [configuration, previousConfiguration])

    return (
        <canvas ref={canvasRef} width="200" height="200" className="border-black-500 border-2 bg-gray-50" style={{ height: '600px', width: '600px' }}></canvas>
    );
}

export default Canvas;