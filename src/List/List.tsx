export const List = ({ results }: { results: any[] }) => {
    if (!results.length) return null;
    return <> {
        results.flat().map((res) => {
            if (res) {
                if (res.includes('https')) {
                    return (
                        <li>
                            <a href={res}>{res}</a>
                        </li>
                    )
                } else {
                    return (
                        <li>
                            {res}
                        </li>
                    )
                }
            }
        })
    }
    </>
}