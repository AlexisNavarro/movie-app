import { useEffect } from 'react';
import './App.css';



const API_URL = 'http://localhost:3001/movies'
const App = () =>{
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
    

    //fetch the data from the api as soon as the component loads
    useEffect(() => {
        searchMovies('Superman');
    }, []);
    
    return(
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input 
                    placeholder='Search for movies'
                    value = "Superman"
                    onChange = {() => {}}
                />
                <img src = {SearchIcon}
                    alt = "search"
                    onClick={() => {}}
                />
            </div>

            <div className='container'>
                <div className = "movie">
                    <p>{movie}</p>
                </div>

            </div>
        </div>
        );
}
export default App;