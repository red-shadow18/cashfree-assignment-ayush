const setLocalStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorageItem = (key, defaultValue) => {
    return JSON.parse(localStorage.getItem(key)) || defaultValue
}

export { setLocalStorageItem, getLocalStorageItem }
