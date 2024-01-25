export const debounce = (fn: Function, delay: number) => {
    let timerId: number | undefined;
    return (...args: any[]) => {
        const lastArgs = args
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...lastArgs);
            clearTimeout(timerId);
            timerId = undefined;
        }, delay)
    }
}

export const fetchUrl = async (query: String, callBack: Function, setLoading: Function) => {
    if (!query) {
        setLoading(false);
        return;
    };
    // const URL = `https://en.wikipedia.org/w/api.php?action=query&titles=${query}&prop=revisions&rvprop=content&format=json&formatversion=2&origin=*`
    const URL = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}&formatversion=2&origin=*`
    setTimeout(async () => {
        const response = await fetch(URL);
        const data = await response.json();
        callBack(data);
        setLoading(false);
    }, 3000)
}