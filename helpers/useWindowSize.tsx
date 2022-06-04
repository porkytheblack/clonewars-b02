import React, { useCallback, useEffect, useState } from 'react'

function useWindowSize() {
    const [windowSize, setWindowSize] = useState<{width?: number, height?: number}>({
        width: undefined,
        height: undefined
    })

    const handleResize = useCallback(()=>{
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }, [])
    useEffect(()=>{
        window.addEventListener('resize', handleResize)
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    }, [,handleResize])
  return windowSize
}

export default useWindowSize