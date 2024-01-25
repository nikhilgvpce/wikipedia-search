import { useState } from 'react'
import './App.css'
import SearchInput from './SearchInput/SearchInput'
import { List } from './List/List'
import LoadingScreen from './LoadingScreen/LoadingScreen'

function App() {
  const [results, setResults] = useState([])
  const [isLoading, setLoading] = useState(false)

  return (
    <div className="parent">
      <div className={`${isLoading ? 'blur' : 'non-blur'} content-container`}>
        <SearchInput responseResultsCallBack={(res: []) => setResults(res)} setLoading={setLoading} isLoading={isLoading} />
        <List results={results} />
      </div>
      <LoadingScreen isLoading={isLoading} />
    </div>
  )
}

export default App
