import { swapiService } from './swapi.service';

const login = (username, password) => {
    return swapiService.getPeople({ search: username }).then((data => {
        if (data.count <= 0) {
            return Promise.reject("User not found!")
        }
        const matchUser = data.results.filter(user => {
            if (user.name == username) {
                return true
            } else {
                return false
            }
        })
        if (!matchUser.length) {
            return Promise.reject("User not found!")
        }
        if (matchUser.length > 0 && matchUser[0]['birth_year'] != password) {
            return Promise.reject("Password not match!")
        }
        const user = {
            username: matchUser[0]['name'],
            password: matchUser[0]['birth_year']
        }
        localStorage.setItem('user', JSON.stringify(user));
        return Promise.resolve(user);
    })).catch(err => {
        return Promise.reject(err)
    });
}

const logout = () => {
    // remove user from local storage
    localStorage.removeItem('user');
    window.location = "/login"
}

export const userService = {
    login,
    logout
}
