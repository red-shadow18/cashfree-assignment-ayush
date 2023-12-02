import {cloneDeep} from "lodash"
export const reducer=(state,action)=>{
    if(action.type==="ADDLIST"){
        return {...state, lists:[...state.lists, action.payload]}
    }else if(action.type==="DELETELIST"){
        let newLists=state.lists
        let newCards=state.cards
        newLists=newLists.filter(list=>list.id !==action.payload)
        delete newCards[action.payload]
        return {...state, lists:newLists, cards:newCards}
    }else if(action.type==="ADDCARD"){
        const {parentListId, cardDetails}= action.payload
        let newCards=cloneDeep(state.cards)
        if(newCards[parentListId]){
            newCards[parentListId].push(cardDetails)
        }else{
            newCards[parentListId]=[cardDetails]
        }
        
        return {...state, cards:newCards}
    }else if(action.type==="DELETECARD"){
        let newCards=cloneDeep(state.cards)
        const {parentListId, cardId} = action.payload
        newCards[parentListId]=newCards[parentListId].filter(card=> card.id !==cardId)
        return {...state, cards:newCards}
    }
    return state
}