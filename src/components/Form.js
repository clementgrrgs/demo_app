import React, {useState, useEffect} from 'react';


function Form(){
    const [movie, setMovie] = useState('');

    useEffect(() => {
        document.getElementById('helper_text').textContent = ((movie === '') 
                                                            ? "Get movie information from his title" 
                                                            : "Get "+movie+" informations");
    },[movie]);

    function handleSubmit(e){
        console.log(movie)
        e.preventDefault();
    }

    return (
        <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
                <div className="input-field col s8">
                    <input id="movie_title" type="text" className="validate" onChange={(e) => setMovie(e.target.value)}/>
                    <label htmlFor="movie_title">Movie title</label>
                    <span id='helper_text' className="helper-text">
                    </span>
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