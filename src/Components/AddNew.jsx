import React,{useState} from "react"
import styled from "@emotion/styled"
import { useDispatch } from "react-redux";
import { addCard, addList } from "../redux/action";


const AddNew=({type="list", parentListId=null})=>{
    const dispatch=useDispatch()
    const [listTitle, setListTitle]=useState("")
    const [cardDetails, setCardDetails]=useState({title:"", description:""})

    const handleListtitleChange=(e)=>{
        const{value}=e.target
        setListTitle(value)
    }

    const handleCardtitleChange=(e)=>{
        const{value}=e.target
        setCardDetails((prev)=>({...prev, title:value}))
    }

    const handleCardDescriptionChange=(e)=>{
        const{value}=e.target
        setCardDetails((prev)=>({...prev, description:value}))
    }

    const handleAddNewList=()=>{
        dispatch(addList({
            id:crypto.randomUUID(),
            title:listTitle,
            cards:[]
        }))
        setListTitle("")
        
    }

    const handleAddNewCard=()=>{
        dispatch(addCard({cardDetails:
            {id:crypto.randomUUID(),
            title:cardDetails.title,
            description:cardDetails.description},
            parentListId:parentListId
        }))

        setCardDetails({title:"", description:""})
    }
    
    return <AddListContainer>
        {type==="list"? <div className="dp-flx-clm">
            <input
            className="inputField"
            value={listTitle}
            onChange={handleListtitleChange}
            placeholder="Enter List Title"
            />
            <button className="button" onClick={handleAddNewList} disabled={!listTitle.length}>Add list</button>
        </div>: <div className="dp-flx-clm">
            <input
            className="inputField"
            value={cardDetails.title}
            onChange={handleCardtitleChange}
            placeholder="Enter Title"
            />
            <input
            className="inputField"
            value={cardDetails.description}
            onChange={handleCardDescriptionChange}
            placeholder="Enter description"
            />
            <button className="button" onClick={handleAddNewCard} disabled={!cardDetails.title || !cardDetails.description}>Add card</button>
        </div>}
       
    </AddListContainer>
}

export default AddNew

const AddListContainer=styled.div`
    .dp-flx-clm{
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap:10px;
        padding:5px 20px;
    }
    .button{
        max-width:100px;
        border-radius: 4px;
        color:white;
        background-color: black;

        :disabled {
            color: #a3a1a1;
            background-color: #e2e2e2;
        }
    }
    .inputField{
        width:100%;
    }
`