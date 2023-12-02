import React from "react";
import styled from "@emotion/styled"
import { useSelector } from "react-redux";
import AddNew from "./AddNew";
import IndividualList from "./IndividualList";


const ListContainer=()=>{

    const lists=useSelector(state=>state.lists)
    let cards=useSelector(state=>state.cards)
    console.log(lists)
    return <OuterDiv>
        <div className="listRenderSection">
            {
                lists.map(list=><IndividualList key={list.id} id={list.id} title={list.title} cards={cards[list.id]}/>)
            }
        </div>
        <div className="addNewListSection">
            <AddNew/>
        </div>
    </OuterDiv>
}


export default ListContainer

const OuterDiv= styled.div`
    display: flex;
    gap:10px;
    padding:20px;

    .listRenderSection {
        width:80%;
        display: flex;
        flex-wrap: wrap;
        gap:20px;

        .deleteButton {
            border:none;
            background-color: transparent;
            cursor: pointer;
            font-weight: 700;
        }
    }

    .addNewListSection{
        background-color: #d9d9d9;
        width:20%;
        padding: 15px 10px;
        border-radius: 8px;
        height: fit-content;
    }

`