import { UIEventHandler, useCallback, useRef } from "react"

const useHScroll = () => {
    const ref = useRef<HTMLDivElement | null>(null)

    const handleScroll: any = useCallback(() => {
        const scrollContainer = ref.current
        if (scrollContainer && scrollContainer.scrollLeft > 0) {
            scrollContainer.classList.remove('pl-[140px]')
        } else {
            scrollContainer && scrollContainer.classList.add('pl-[140px]')
        }
    }, [])
    
    return [ref, handleScroll]
}

export default useHScroll