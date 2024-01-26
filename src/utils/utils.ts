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

export const fetchUrl = async (query: String, callBack: Function, setLoading: Function) => {
    if (!query) {
        setLoading(false);
        return;
    };
    // const URL = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}&formatversion=2&origin=*`;
    const URL = 'http://localhost:8080/query/'
    setTimeout(async () => {
        const response = await fetch(URL, {
            headers: {
                mode: 'no-cors',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'POST',
            body: JSON.stringify({query})
        });
        const data = await response.json();
        callBack(data);
        setLoading(false);
    }, 3000)
}