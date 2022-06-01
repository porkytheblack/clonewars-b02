import React, { createContext, useCallback, useEffect } from 'react'

export interface ScrollValue {
    scrollY: number
}

export const ScrollContext = createContext<ScrollValue>({
    scrollY: 0
})

function ScrollObserver({children}: {children: React.ReactNode}) {
    const [scrollY, setScrollY] = React.useState(0)
   
    const handleScroll = useCallback(()=>{
        setScrollY(window.scrollY)
    }, [])

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

  return (
      <ScrollContext.Provider value={{ scrollY }}>
          {children}
      </ScrollContext.Provider>
    
  )
}

export default ScrollObserver