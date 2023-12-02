import React from "react"
import styled from "@emotion/styled"
import { useDispatch } from "react-redux";
import { deleteCard } from "../redux/action";

const Card=({id,title,description,parentListId})=>{
    const dispatch=useDispatch()
    const handleCardDelete=()=>{
        dispatch(deleteCard({cardId:id, parentListId:parentListId}))
    }
    return(
        <CardContainer data-id={id}>
            <div className="topSection"><h3 className="title">{title}</h3> <button onClick={handleCardDelete} className="deleteButton">X</button></div>
            <p className="description">{description}</p>
        </CardContainer>
    )
}

export default Card;

const CardContainer=styled.div`
    background-color: white;
    padding:5px 20px;
    text-align: left;
    word-wrap: break-word;
    .topSection {
        display: flex;
        justify-content: space-between;

        h3 {
            margin:0 !important;
            width: 90%;
        }

        button {
            height: fit-content;
            margin-top: 5px;
        }
    }
`