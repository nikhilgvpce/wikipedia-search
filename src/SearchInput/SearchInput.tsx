import { ChangeEvent, useState } from "react"
import "./SearchInput.css"
import { fetchUrl } from "../utils/utils"
import useDebounce from "../Hooks/useDebounce/useDebounce";

const SearchInput = ({ responseResultsCallBack, setLoading, isLoading }: { responseResultsCallBack: Function, setLoading: Function, isLoading: boolean }) => {

    const [query, setQuery] = useState('');
    const [searchHistory, setSearchHistory] = useState([''])

    const fetchResultsDebounce = useDebounce(() => {
        setLoading(true);
        setSearchHistory([...searchHistory, query])
        fetchUrl(query, responseResultsCallBack, setLoading)
      }, 300);


    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value || '';
        setQuery(value);
        fetchResultsDebounce(value, responseResultsCallBack);
    }

    return (
        <input disabled={isLoading} className='search-input' type="search" onChange={handleInputChange} value={query} />
    )
}

export default SearchInput;