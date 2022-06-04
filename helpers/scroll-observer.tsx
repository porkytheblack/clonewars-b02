import React, { createContext, useCallback, useEffect, useRef } from 'react'

export interface ScrollValue {
    scrollY: number,
    percentage: number
}

export const ScrollContext = createContext<ScrollValue>({
    scrollY: 0,
    percentage: 0
})

function ScrollObserver({children}: {children: React.ReactNode}) {
    const [scrollY, setScrollY] = React.useState(0)
    const [percentage, set_percentage] = React.useState(0)
    const ref = useRef<HTMLDivElement|null>(null)
    const handleScroll = useCallback(()=>{
        setScrollY(window.scrollY)
    }, [])

    const {current: cur} = ref

    useEffect(()=>{
        if(cur) {
            set_percentage((scrollY/(cur.getBoundingClientRect().top+scrollY))/0.92)
        }
    }, [, scrollY])

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

  return (
      <ScrollContext.Provider value={{ scrollY, percentage }}>
          <>
          {children}
          <div ref={ref} className=""></div>
          </>
      </ScrollContext.Provider>
    
  )
}

export default ScrollObserver