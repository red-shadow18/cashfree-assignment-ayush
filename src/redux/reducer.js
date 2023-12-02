import { setLocalStorageItem } from '../utils/localstorage-utils'
import { ADD_CARD, ADD_LIST, DELETE_CARD, DELETE_LIST } from './action'

export const reducer = (state, action) => {
    if (action.type === ADD_LIST) {
        let updatedLists = [...state.lists, action.payload]
        setLocalStorageItem('lists', updatedLists)
        return { ...state, lists: updatedLists }
    } else if (action.type === DELETE_LIST) {
        let updatedLists = state.lists.filter(
            (list) => list.id !== action.payload
        )
        let updatedCards = { ...state.cards }
        delete updatedCards[action.payload]
        setLocalStorageItem('lists',updatedLists)
        setLocalStorageItem('cards',updatedCards)
        return { ...state, lists: updatedLists, cards: updatedCards }
    } else if (action.type === ADD_CARD) {
        const { parentListId, cardDetails } = action.payload
        let updatedCards = { ...state.cards }
        if (updatedCards[parentListId]) {
            updatedCards[parentListId].push(cardDetails)
        } else {
            updatedCards[parentListId] = [cardDetails]
        }
        setLocalStorageItem('cards',updatedCards)
        return { ...state, cards: updatedCards }
    } else if (action.type === DELETE_CARD) {
        let updatedCards = {...state.cards}
        const { parentListId, cardId } = action.payload
        updatedCards[parentListId] = updatedCards[parentListId].filter(
            (card) => card.id !== cardId
        )
        setLocalStorageItem('cards',updatedCards)
        return { ...state, cards: updatedCards }
    }
    return state
}
