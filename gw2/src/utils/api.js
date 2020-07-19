import axios from 'axios';

const gw2 = 'https://api.guildwars2.com/v2';

export function getAccountInfo(key) {
    const url = `${gw2}/account?access_token=${key}`;
    return axios.get(url);
}

export function getCharacterList(key) {
    const url = `${gw2}/characters?access_token=${key}`
}

export function getCharacterInfo(key, name) {
    const url = `${gw2}/characters/${name}?access_token=${key}`;
    return axios.get(url);
    // sub spaces with %20
}

export function getPermissions(key) {
    const url = `${gw2}/tokenifo?access_token=${key}`
    return axios.get(url)
}