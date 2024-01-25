import { useEffect, useMemo, useRef } from "react";
import { debounce } from "../../utils/utils";



const useDebounce = (fn: Function, delay: number) => {
    const ref:any = useRef();
    useEffect(() => {
      ref.current = fn;
    }, [fn]);
  
    const debouncedCallback = useMemo(() => {
      const func = () => {
        ref.current?.();
      };
  
      return debounce(func, delay);
    }, []);
  
    return debouncedCallback;
  
}

export default useDebounce;