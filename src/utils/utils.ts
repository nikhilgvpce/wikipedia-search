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

const cache: {[key: string]: []} = {};
export const fetchUrl = async (query: String, callBack: Function, setLoading: Function) => {
    if (!query) {
        setLoading(false);
        return;
    };
    // const URL = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}&formatversion=2&origin=*`;
    const URL = 'http://localhost:8080/query/'
    try {
        setTimeout(async () => {
            if(cache[query]) {
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
                body: JSON.stringify({query})
            });
            const data = await response.json();
            cache[query] = data;
            callBack(data);
            setLoading(false);
        }, 1500)
    } catch(err: any) {
        setLoading(false);
        throw Error(err)
    }
}