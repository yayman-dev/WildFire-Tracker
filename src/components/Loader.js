import spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1>Fetching Data from Server</h1>
        </div>
    )
}

export default Loader
