export const debounce = (fn: Function, delay: number) => {
    let timerId: number | ReturnType<typeof setTimeout> | undefined;
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


export const fetchUrl = async (query: string, callBack: Function, setLoading: Function) => {
    if (!query) {
        setLoading(false);
        return;
    };
    // const URL = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}&formatversion=2&origin=*`;
    const URL = 'http://localhost:8080/query/'
    try {
        setTimeout(async () => {
            let cache = JSON.parse(localStorage.getItem('cache') || '');
            if (!cache) {
                localStorage.setItem('cache', JSON.stringify([]));
            } else if(cache[query]) {
                setLoading(false);
                callBack(cache[query]);
                return;
            }
            const response = await fetch(URL, {
                headers: {
                    mode: 'no-cors',
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                method: 'POST',
                body: JSON.stringify({ query })
            });
            const data = await response.json();
            cache = {
                ...cache,
                query: data
            };
            callBack(data);
            setLoading(false);
        }, 1500)
    } catch (err: any) {
        setLoading(false);
        throw Error(err)
    }
}