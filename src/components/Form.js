import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../actions/index'


function Form(){
    const [movie, setMovie] = useState('');
    const [error,setError] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        document.getElementById('helper_text').textContent = ((movie === '') 
                                                            ? "Get movie information from his title" 
                                                            : "Click on search to get informations about the movie : "+movie);
    },[movie]);

    useEffect(() => {
        document.getElementById('error_text').textContent = error;
    },[error])


    async function getMovie(movieTitle){
        const response = await fetch('http://www.omdbapi.com/?apikey=d55ae30d&t='+movieTitle.replace(' ','+'));

        if(!response.ok){
            const message = 'An error as occured : '+response.status;
            setError("An error has occured");
            throw new Error(message);
        }
        const movieInfo = await response.json();
        return movieInfo;
    }

    function handleSubmit(e){
        e.preventDefault();
        
        getMovie(movie).then((result) => {
            setError('');
            dispatch(fetchMovie(result));
        },
        (error) => {
            setError("An error has occured");
            console.log('An error as occured : '+error.message);
        });    
    }

    return (
        <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
                <div className="input-field col s8">
                    <input  id="movie_title" 
                            type="text" 
                            className="validate" 
                            required 
                            onChange={(e) => setMovie(e.target.value)}
                    />
                    <label htmlFor="movie_title">Movie title</label>
                    <span id='helper_text' className="helper-text"></span>
                    <span id="error_text" className="helper-text"></span>
                </div>
                <div className="input-field  center col s4">
                    <button className="btn waves-effect waves-light" type="submit" name="action">
                        Search
                    </button>
                </div>
            </div>
            </form>
        </div>
    );
}

export default Form;