export const ADD_LIST = 'ADD_LIST'
export const ADD_CARD = 'ADD_CARD'
export const DELETE_LIST = 'DELETE_LIST'
export const DELETE_CARD = 'DELETE_CARD'

export const addList = (value) => ({ type: ADD_LIST, payload: value })
export const addCard = (value) => ({ type: ADD_CARD, payload: value })
export const deleteList = (value) => ({ type: DELETE_LIST, payload: value })
export const deleteCard = (value) => ({ type: DELETE_CARD, payload: value })
