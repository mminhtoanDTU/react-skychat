export const setLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export const setArrayLocalStorage = (key, value) => {
    const current = JSON.parse(localStorage.getItem(key)) || [];
    const newValue = [...current, value];
    return localStorage.setItem(key, JSON.stringify(newValue));
}

export const setSessionStorage = (key, value) => {
    const current = JSON.parse(sessionStorage.getItem(key)) || [];
    const newValue = [...current, value];
    return sessionStorage.setItem('messages', JSON.stringify(newValue));
}

export const getSessionStorage = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
}