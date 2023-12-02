// export const FETCHFROMLOCALSTORAGE="FETCHFROMLOCALSTORAGE"
// export const ADDTOLOCALSTORAGE="ADDTOLOCALSTORAGE"
export const ADDLIST="ADDLIST"
export const ADDCARD="ADDCARD"
export const DELETELIST="DELETELIST"
export const DELETECARD="DELETECARD"


//export const fetchFromLocalstoratge=


export const addList=(value)=>({type:ADDLIST, payload:value})
export const addCard=(value)=>({type:ADDCARD, payload:value})
export const deleteList=(value)=>({type:DELETELIST, payload:value})
export const deleteCard=(value)=>({type:DELETECARD, payload:value})