import React, { useState, useEffect } from 'react';
import { swapiService } from './../../services/swapi.service';

const Search = (props) => {
    const [planets, setPlanets] = useState([])
    useEffect(() => {
        swapiService.getPlanets(function (data) {
            console.log(data)
            setPlanets(data.results)
        })
    }, [])
    return (
        <>
            <div className="row justify-content-center mt-3">
                <div className="col-12 mb-3">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="card-title">Search Planets</h1>
                        </div>
                        <div className="card-body">
                            <input type="text" className="form-control" placeholder="Search by planets name" />
                        </div>
                    </div>
                </div>
                {planets.length <= 0 && "Planets loading..."}
                {planets.map((planet, idx) => {
                    let population = parseInt(planet.population) || 0;
                    let colClass = population < 10000000 ? "col-8" : "col-10";
                    let bgClassName = colClass == "col-10" ? "bg-secondary text-white" : "";
                    return (
                        <div key={idx} className={colClass}>
                            <div className="card">
                                <div className={`card-header ${bgClassName}`}>
                                    <div className="card-title">{planet.name}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Search;