import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
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

    async function handleSubmit(e){
        e.preventDefault();
        try{
            const response = await axios.get('http://www.omdbapi.com/?apikey=d55ae30d&t='+movie.replace(' ','+'));
            dispatch(fetchMovie(response.data));
            setError('');
        } catch (error){
            setError("An error has occured");
            console.log('An error as occured : '+error.message);
        }       
    }

    return (
        <div className="row" aria-label="form-div">
            <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
                <div className="input-field col s8">
                    <input  id="movie_title" 
                            type="text" 
                            className="validate" 
                            aria-label="label-input"
                            required 
                            onChange={(e) => setMovie(e.target.value)}
                    />
                    <label htmlFor="movie_title">Movie title</label>
                    <span id='helper_text' className="helper-text" aria-label="label-helper"></span>
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