export const setLocalStorage = (key, value) => {
    return localStorage.setItem(`sky-${key}`, JSON.stringify(value));
}

export const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(`sky-${key}`));
}

export const setArrayLocalStorage = (key, value) => {
    const current = JSON.parse(localStorage.getItem(`sky-${key}`)) || [];
    const newValue = [...current, value];
    return localStorage.setItem(`sky-${key}`, JSON.stringify(newValue));
}

export const setSessionStorage = (key, value) => {
    const current = JSON.parse(sessionStorage.getItem(`sky-${key}`)) || [];
    const newValue = [...current, value];
    return sessionStorage.setItem(`sky-${key}`, JSON.stringify(newValue));
}

export const getSessionStorage = (key) => {
    return JSON.parse(sessionStorage.getItem(`sky-${key}`));
}

export const clearLocalStore = (key) => {
    return localStorage.removeItem(`sky-${key}`);
}

