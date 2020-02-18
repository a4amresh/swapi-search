import axios from 'axios';
import { API_URL } from './../helpers/config';


const request = (url, cb) => {
    return axios.get(url)
        .then(function (res) {
            return res.data;
        })
        .then(function (data) {
            if (typeof cb === "function") {
                cb(data);
            }
            return data;
        })
        .catch(function (err) {
            return Promise.reject(err)
        });
}

const getResources = (cb) => {
    return request(API_URL, cb);
}

const singularRequestGenerator = (path) => {
    return function (id, cb) {
        return request(API_URL + path + "/" + id + "/", cb);
    };
}

const pluralRequestGenerator = (path) => {
    return function () {
        let queryObject = undefined;
        let cb = undefined;

        if (arguments.length > 1) {
            queryObject = arguments[0];
            cb = arguments[1];
        } else if (arguments[0]) {
            // If given exactly one argument
            if (typeof arguments[0] === "function") {
                cb = arguments[0];
                queryObject = null;
            } else {
                cb = null;
                queryObject = arguments[0];
            }
        }

        if (queryObject) {
            let searchParams = new URLSearchParams();
            for (let key of Object.keys(queryObject)) {
                let value = queryObject[key];
                searchParams.append(key, value);
            }
            return request(API_URL + path + "/?" + searchParams.toString(), cb);
        }

        return request(API_URL + path + "/", cb);

    };
}

export const swapiService = {
    getResources: getResources,
    getPerson: singularRequestGenerator("people"),
    getPeople: pluralRequestGenerator("people"),
    getPlanet: singularRequestGenerator("planets"),
    getPlanets: pluralRequestGenerator("planets"),
    getFilm: singularRequestGenerator("films"),
    getFilms: pluralRequestGenerator("films"),
    getSpecies: singularRequestGenerator("species"),
    getAllSpecies: pluralRequestGenerator("species"),
    getStarship: singularRequestGenerator("starships"),
    getStarships: pluralRequestGenerator("starships"),
    getVehicle: singularRequestGenerator("vehicles"),
    getVehicles: pluralRequestGenerator("vehicles")
}