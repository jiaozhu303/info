import axios from 'axios';

export const fetchRepos = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}/repos`);
}