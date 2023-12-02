import {cloneDeep} from "lodash"
export const reducer=(state,action)=>{
    if(action.type==="ADD_LIST"){
        let finalLists=[...state.lists, action.payload]
        localStorage.setItem("lists",JSON.stringify(finalLists))
        return {...state, lists:finalLists}
    }else if(action.type==="DELETE_LIST"){
        let newLists=state.lists
        let newCards=state.cards
        newLists=newLists.filter(list=>list.id !==action.payload)
        delete newCards[action.payload]
        localStorage.setItem("lists",JSON.stringify(newLists))
        localStorage.setItem("cards",JSON.stringify(newCards))
        return {...state, lists:newLists, cards:newCards}
    }else if(action.type==="ADD_CARD"){
        const {parentListId, cardDetails}= action.payload
        let newCards=cloneDeep(state.cards)
        if(newCards[parentListId]){
            newCards[parentListId].push(cardDetails)
        }else{
            newCards[parentListId]=[cardDetails]
        }
        localStorage.setItem("cards",JSON.stringify(newCards))
        return {...state, cards:newCards}
    }else if(action.type==="DELETE_CARD"){
        let newCards=cloneDeep(state.cards)
        const {parentListId, cardId} = action.payload
        newCards[parentListId]=newCards[parentListId].filter(card=> card.id !==cardId)
        localStorage.setItem("cards",JSON.stringify(newCards))
        return {...state, cards:newCards}
    }
    return state
}