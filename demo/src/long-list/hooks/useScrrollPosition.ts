import { RefObject, useCallback, useLayoutEffect, useRef, useState } from 'react'

export function useScrollPosition(
  element: RefObject<HTMLElement>,
  wait: number = 0
) {
  const [position, setPosition] = useState(0);
  const ref = useRef<{throttleTimeout: NodeJS.Timeout | null}>({throttleTimeout: null});

  const callBack = useCallback(() => {
    setPosition(element?.current?.scrollTop || 0);
    ref.current.throttleTimeout = null;
  }, [element]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (ref.current.throttleTimeout === null) {
          ref.current.throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }
    element != null && element?.current?.addEventListener('scroll', handleScroll)
    return () => element?.current?.removeEventListener('scroll', handleScroll)
  }, [callBack, element])

  return position;
}
