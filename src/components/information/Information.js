import React from 'react';
import { useSelector } from 'react-redux';
import InformationField from './InformationField';

function Information(){

    const store = useSelector(state => state.movie) || {};
    const infoToShow = [
        "Title",
        "Year",
        "Actors",
        "Director",
        "Genre",
        "Plot",
        "Runtime"
    ];

    return (
        <div className="row">
            <div className="col s5">
                { (Object.keys(store).length > 0) && <img src={store["Poster"]} alt="movie poster"/> }
            </div>
            <div className="col s5">
                {
                    Object.keys(store).map((key,index) => {
                        if (infoToShow.includes(key)) {
                            return <InformationField key={index} label={key} info={store[key]}/>
                        }
                        return "";
                    })
                }
            </div>
        </div>
    );

}

export default Information;