import React from "react"
import styled from "@emotion/styled"
import { useDispatch } from "react-redux";
import { deleteList } from "../redux/action";
import Card from "./Card";
import AddNew from "./AddNew";

const IndividualList=({id,title,cards=[]})=>{
    const dispatch=useDispatch()
    const handleListDelete=()=>{
        dispatch(deleteList(id))
    }
    return(
        <ListContainer data-id={id}>
            <div className="topSection"><h3 className="title">{title}</h3> <button onClick={handleListDelete} className="deleteButton">X</button></div>
            <div className="cardsContainer">
            {
                cards.map(card=><Card key={card.id}  id={card.id} title={card.title} description={card.description} parentListId={id}/>)
            }
            
            </div>
            <AddNew type="card" parentListId={id}/>
        </ListContainer>
    )
}

export default IndividualList;

const ListContainer=styled.div`
    background-color: #d9d9d9;
    width: 250px;
    padding: 15px 10px;
    border-radius: 8px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap:15px;

    .topSection {
        display: flex;
        justify-content: space-between;

        h3 {
            margin:0 !important;
            width: 90%;
            word-wrap: break-word;
            text-align: left;
        }

        button {
            height: fit-content;
            margin-top: 5px;
        }
    }

    .cardsContainer {
        max-height:60vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap:15px;
    }
`