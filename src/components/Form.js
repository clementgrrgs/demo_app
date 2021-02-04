import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchMovie } from '../actions/index'


/**
 * Get informations of a movie (with its title) from the OMDB API when the form is submit 
 * Then store this information in the Redux State 
 */
function Form(){
    const [movie, setMovie] = useState('');
    const [error,setError] = useState('');
    const dispatch = useDispatch();

    /**
     * Change the value of the helper text when the value input change
     */
    useEffect(() => {
        document.getElementById('helper_text').textContent = ((movie === '') 
                                                            ? "Get movie informations from its title" 
                                                            : "Click on search to get informations about the movie : "+movie);
    },[movie]);

    /**
     * Show error information to the user when API call goes wrong
     */
    useEffect(() => {
        document.getElementById('error_text').textContent = error;
    },[error])


    /**
     * Handle the form submit event, call the API and dispatch the result in the redux store
     * @param {Object} e - Object that represent the submit event
     */
    async function handleSubmit(e){
        e.preventDefault();
        try{
            const response = await axios.get('http://www.omdbapi.com/?apikey=d55ae30d&t='+movie.replace(' ','+'));
            if (response.data.Response === "False"){
                setError(response.data.Error); 
            } else {
                dispatch(fetchMovie(response.data));
                setError('');
            }
            

                      
        } catch (error){
            setError("An error has occured");
            console.log('An error as occured : '+error.message);
        }       
    }

    return (
        <div className="row container" aria-label="form-div">
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
                    <span id="error_text" className="helper-text" style={{color:"red"}}></span>
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