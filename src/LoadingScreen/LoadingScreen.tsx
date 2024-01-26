import "./LoadingScreen.css";

const loadingMessage = 'Fetching results...'
const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
    if (!isLoading) return null;
    return (
        <>
            <p>{loadingMessage}</p>
            <div className='loader'></div>
        </>
    )
}

export default LoadingScreen;