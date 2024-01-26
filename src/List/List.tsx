export const List = ({ results }: { results: any[] }) => {
    if (!results.length) return null;
    return <>
        {results.flat().map((res) => {
            if (res) {
                if (res.includes('https')) {
                    return (
                        <li  key={res}>
                            <a href={res}>{res}</a>
                        </li>
                    )
                } else {
                    return (
                        <li key={res}>
                            {res}
                        </li>
                    )
                }
            }
        })
        }</>
}